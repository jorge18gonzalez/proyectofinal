import jwt
from flask.views import MethodView
from flask import jsonify, request
from modelo import *
from config import KEY_TOKEN_AUTH
import bcrypt


comexion = Login();
test = Test();
user = User()


class  RegisterControllers(MethodView):

    def post(seft):
        content = request.get_json()
        userName = content.get("user")
        userPass = content.get("pass")
        rol = content.get("rol")

        salt = bcrypt.gensalt()
        hash_password = bcrypt.hashpw(bytes(str( userPass), encoding= 'utf-8'), salt)
        registro = user.guardar(  userName ,  userPass  , rol)

        if registro:
            return  jsonify({"Status": "exito"}),200




class LoginControllers(MethodView):
    """
        Example register
    """
    def post(self):
        content = request.get_json()
        email = content.get("email")
        password = content.get("password")
        rol = content.get("rol") 
        
        salt = bcrypt.gensalt()
        hash_password = bcrypt.hashpw(bytes(str(password), encoding= 'utf-8'), salt)
        encoded_jwt = jwt.encode({'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=300), 'email': email , 'rol': rol}, KEY_TOKEN_AUTH , algorithm='HS256')

        resp = conexion.ingresar(email , hash_password , rol)
        if resp:
            return jsonify({"Status": "Registro ok",
            "password_encriptado": hash_password.decode(),
            "password_plano": password}), 200
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







