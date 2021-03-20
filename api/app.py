from flask import Flask
from routes import *
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})



app.add_url_rule(routes["login"], view_func=routes['LoginControllers'])
app.add_url_rule(routes["test"], view_func=routes["TestControllres"])
app.add_url_rule(routes["list-test"] , view_func=routes['TestControllres'])
app.add_url_rule(routes["update-test"] , view_func=routes['TestControllres'])
app.add_url_rule(routes['prueba'] , view_func=routes['PruebaControllers'])