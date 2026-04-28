import os
from datetime import datetime, timezone
from pathlib import Path

import resend
from dotenv import load_dotenv

load_dotenv(Path(__file__).parent / ".env")

resend.api_key = os.environ["RESEND_API_KEY"]

BATCH_SIZE = 100
DATA_DIR = Path(__file__).parent / "data"
SUPPRESSION_FILE = DATA_DIR / "suppression.txt"
SENT_LOG = DATA_DIR / "sent.log"


def _load_suppression() -> set[str]:
    if not SUPPRESSION_FILE.exists():
        return set()
    return {
        line.strip().lower()
        for line in SUPPRESSION_FILE.read_text(encoding="utf-8").splitlines()
        if line.strip()
    }


def _log_sent(email: str, resend_id: str, status: str) -> None:
    DATA_DIR.mkdir(exist_ok=True)
    timestamp = datetime.now(timezone.utc).isoformat()
    with SENT_LOG.open("a", encoding="utf-8") as f:
        f.write(f"{timestamp}\t{email}\t{resend_id}\t{status}\n")


def send_bulk(recipients: list[str], subject: str, html: str) -> dict:
    suppression = _load_suppression()
    to_send = [e for e in recipients if e.strip().lower() not in suppression]

    from_email = os.environ["FROM_EMAIL"]
    sent = 0
    failed = 0

    for i in range(0, len(to_send), BATCH_SIZE):
        chunk = to_send[i : i + BATCH_SIZE]
        params = [
            {"from": from_email, "to": email, "subject": subject, "html": html}
            for email in chunk
        ]
        try:
            response = resend.Batch.send(params)
            items = response.get("data", [])
            for email, item in zip(chunk, items):
                _log_sent(email, item.get("id", ""), "sent")
                sent += 1
        except Exception as exc:
            for email in chunk:
                _log_sent(email, "", f"failed: {exc}")
                failed += 1

    return {
        "sent": sent,
        "failed": failed,
        "skipped": len(recipients) - sent - failed,
    }


if __name__ == "__main__":
    result = send_bulk(
        recipients=["delivered@resend.dev", "delivered@resend.dev"],
        subject="Bulk test from marketing-support",
        html="<p>Test bulk via Resend.</p>",
    )
    print(result)
