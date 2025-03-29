import pickle
import json
import numpy as np
import os

# Global variables
__locations = None
__data_columns = None
__model = None

def load_saved_artifacts():
    """ Load the trained model and columns.json """
    print("Loading saved artifacts...")

    global __data_columns
    global __locations
    global __model

    # Get current directory of this script
    base_dir = os.path.dirname(os.path.abspath(__file__))  # ✅ Corrected "__file__"

    # Paths to artifacts
    artifacts_dir = os.path.join(base_dir, "artifacts")
    columns_path = os.path.join(artifacts_dir, "columns.json")
    model_path = os.path.join(artifacts_dir, "banglore_home_prices_model.pickle")

    # Check if files exist before loading
    if not os.path.exists(columns_path):
        raise FileNotFoundError(f"Error: '{columns_path}' not found.")
    if not os.path.exists(model_path):
        raise FileNotFoundError(f"Error: '{model_path}' not found.")

    # Load JSON data
    with open(columns_path, "r") as f:
        __data_columns = json.load(f)['data_columns']
        __locations = __data_columns[3:]  # First 3 columns are sqft, bath, bhk

    # Load the trained model
    with open(model_path, 'rb') as f:
        __model = pickle.load(f)

    print("Loading saved artifacts... DONE")

def get_estimated_price(location, sqft, bhk, bath):
    """ Predict the house price based on input values """
    try:
        loc_index = __data_columns.index(location.lower())
    except ValueError:
        loc_index = -1  # Location not found

    x = np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bath
    x[2] = bhk
    if loc_index >= 0:
        x[loc_index] = 1  # One-hot encoding for location

    return round(__model.predict([x])[0], 2)

def get_location_names():
    return __locations

def get_data_columns():
    return __data_columns

if __name__ == "__main__":  # ✅ Corrected "__main__" instead of "_main_"
    load_saved_artifacts()
    print("Available Locations:", get_location_names())
    print("Test Prediction:", get_estimated_price('1st Phase JP Nagar', 1000, 3, 3))
    print(get_estimated_price('1st Phase JP Nagar', 1000, 3, 3))
    print(get_estimated_price('1st Phase JP Nagar', 1000, 2, 2))
    print(get_estimated_price('Kalhalli', 1000, 2, 2))  # Other location
    print(get_estimated_price('Ejipura', 1000, 2, 2))  # Other location
    print(5)
    print(get_estimated_price('B', 1050, 2, 2))

