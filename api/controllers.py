import jwt
from flask.views import MethodView
from flask import jsonify, request
from modelo import *
from config import KEY_TOKEN_AUTH
import bcrypt
import datetime


ingresar = Login();
test = Test();


class PruebaControllers(MethodView):

    def post(self):
        content = request.get_json()
        print(content , '----------')
        correo = content.get("correo")
        password = content.get("password")
       

        salt = bcrypt.gensalt()
        hash_password = bcrypt.checkpw(bytes(str(password) , encoding = 'utf-8') , salt)

        resp = prueba.guardar(correo , hash_password)

        if resp:
            return jsonify({"status":"insertado"}),200
        else:
            return jsonify({"status":"error"}),500

class LoginControllers(MethodView):
    """
        Example register
    """
    def post(self):
        content = request.get_json()
        correo = content.get("email")
        password = content.get("password")
       
        
        salt = bcrypt.gensalt()
        hash_password = bcrypt.hashpw(bytes(str(password), encoding= 'utf-8'), salt)
        final_password = hash_password.decode()
        print(final_password)
        resp = ingresar.ingresar(correo ,final_password)
        if resp:
            encoded_jwt = jwt.encode({'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=300), 'email': correo }, KEY_TOKEN_AUTH , algorithm='HS256')
            return jsonify({"Status": "Login ok" , "token":encoded_jwt }), 200
        else:   
            return jsonify({"Status": "error"}),500


class TestControllres(MethodView):
    def post(self):
        content = request.get_json()
        talla = content.get("talla")
        peso = content.get("peso")
        print(talla)
        print(peso)

        imc = (peso * talla)/2
        print(imc)

        rep = test.guardar(talla , peso , imc )

        if rep:
            return jsonify({"Status": "test registrado"}),200
        else:
            return jsonify({"Status":"error al registar el test"}),500

    def get(self):
        content = request.get_json()

        resp = test.consultar()

        if resp:
            return jsonify({"status":"consultado" ,"datos":resp}),200
        else:
            return jsonify({"error" : "error "}),500
    
    def put(self ):
        content = request.get_json()
        id_test = content.get("id")
        peso = content.get("peso")

        resp = test.actualizar(id_test , peso)
        
        if resp:
            return jsonify({"status":"actualizado"}),200
        else:
            return jsonify({"estatus":"error al actualizar"}),500







