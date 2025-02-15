import joblib
import pandas as pd
import json

def predict(config):
    filename = "model.dwm"
    model = joblib.load(filename)

    if type(config) == dict:
        df = pd.DataFrame(config)
    else:
        df = config
    
    y_pred = model.predict(df)
    
    if y_pred == 0:
        return 'Brown Dwarf'
    elif y_pred == 1:
        return 'Red Dwarf'
    elif y_pred == 2:
        return 'White Dwarf'
    elif y_pred == 3:
        return 'Main Sequence'
    elif y_pred == 4:
        return 'Supergiant'
    elif y_pred == 5:
        return 'Hypergiant'