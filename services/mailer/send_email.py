import os
from pathlib import Path

import resend
from dotenv import load_dotenv

load_dotenv(Path(__file__).parent / ".env")

resend.api_key = os.environ["RESEND_API_KEY"]


def send_email(to: str, subject: str, html: str) -> str:
    response = resend.Emails.send(
        {
            "from": os.environ["FROM_EMAIL"],
            "to": to,
            "subject": subject,
            "html": html,
        }
    )
    return response["id"]


if __name__ == "__main__":
    message_id = send_email(
        to="delivered@resend.dev",
        subject="Hello from marketing-support",
        html="<p>Premier envoi via Resend.</p>",
    )
    print(f"Sent: {message_id}")
