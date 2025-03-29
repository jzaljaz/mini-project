from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend requests

app.config["MONGO_URI"] = "mongodb://localhost:27017/your_database"
mongo = PyMongo(app)

@app.route("/get_username", methods=["GET"])
def get_username():
    token = request.headers.get("Authorization")
    if not token:
        return jsonify({"error": "Unauthorized"}), 401

    # Fetch user from MongoDB based on token (modify as needed)
    user = mongo.db.users.find_one({"token": token.replace("Bearer ", "")})

    if user and "firstName" in user:
        return jsonify({"firstName": user["firstName"]})  # Correct casing
    else:
        return jsonify({"error": "User not found"}), 404

if __name__ == "__main__":
    app.run(debug=True, port=5000)
