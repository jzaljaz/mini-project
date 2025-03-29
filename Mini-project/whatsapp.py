from flask import Flask, request, jsonify
from twilio.rest import Client
import os

app = Flask(__name__)

# Twilio Credentials (Replace with your actual credentials)
TWILIO_ACCOUNT_SID = "your_account_sid"
TWILIO_AUTH_TOKEN = "your_auth_token"
TWILIO_WHATSAPP_NUMBER = "whatsapp:+14155238886"  # Twilio's sandbox number

# Initialize Twilio Client
client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

@app.route("/send_whatsapp", methods=["POST"])
def send_whatsapp():
    try:
        data = request.json  # Get JSON data from request
        user_phone = data.get("phoneNumber")  # Get phone number from request body
        user_name = data.get("firstName")

        if not user_phone:
            return jsonify({"error": "Phone number is required"}), 400

        message_body = f"Hello {user_name}, welcome to our Real Estate Price Prediction System!"

        message = client.messages.create(
            from_=TWILIO_WHATSAPP_NUMBER,
            body=message_body,
            to=f"whatsapp:+{user_phone}"  # Ensure number is in E.164 format (e.g., +919876543210)
        )

        return jsonify({"message": "WhatsApp message sent successfully!", "sid": message.sid}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5001)

