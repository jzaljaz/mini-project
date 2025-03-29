from flask import Flask, request, jsonify
import util

app = Flask(__name__)
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


# Home Route (Fixes "Not Found" issue when visiting "/")
@app.route('/')
def home():
    return "Welcome to Bangalore House Price Prediction API!"

# Get Available Locations
@app.route('/get_location_names', methods=['GET'])
def get_location_names():
    response = jsonify({
        'locations': util.get_location_names()
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

# Predict House Price
@app.route('/predict_home_price', methods=['POST'])
def predict_home_price():
    data = request.get_json()
    if not data:
        return jsonify({"error": "Invalid input data"}), 400

    try:
        total_sqft = float(data['total_sqft'])
        location = data['location']
        bhk = int(data['bhk'])
        bath = int(data['bath'])

        estimated_price = util.get_estimated_price(location, total_sqft, bhk, bath)

        response = jsonify({
            'estimated_price': estimated_price
        })
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":  # ✅ Corrected "__main__" instead of "_main_"
    print("Starting Python Flask Server For Home Price Prediction...")
    util.load_saved_artifacts()
    app.run(debug=True)  # Debugging enabled
