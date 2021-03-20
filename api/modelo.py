import psycopg2

class Prueba():

    def  guardar(self, correo , hash_password):
        try:
            conexion = psycopg2.connect( user="postgres",password="valeria1",host="127.0.0.1",port="5432",database="proyecto")
            cursor = conexion.cursor()
            cursor.execute("INSERT INTO personas(contraseña , correo ) VALUES(%s , %s)" ,(correo , hash_password))
            conexion.commit()
        except(Exception, psycopg2.Error)as error :
            print ("Error while fetching data from PostgreSQL", error)
        finally:
                if(conexion):
                    cursor.close()
                    conexion.close()
                    print("PostgreSQL connection is closed")



class Login():
    #se creea el modelo para gestionar el login 
        def  ingresar(self, correo , final_password):
            try:
                conexion = psycopg2.connect(database="dd1o1liu6nsqob", user="gvjdpzhyjsvfxs", password="5ffbbd36b7bf7d3ff6e7edb572b8667da3b15d4396b445f4e705f13c25f8d075",
                                        host="ec2-52-23-190-126.compute-1.amazonaws.com", port="5432")

                cursor = conexion.cursor()
                login = "SELECT  correo , contraseña , tipopersona FROM  personas WHERE correo=%s AND contraseña=%s";
                cursor.execute(login ,(correo ,  final_password,))
                usuario = cursor.fetchall()
                tipoUser = []
                for item in usuario:
                    items = {"tipopersona" :item[11]}
                    print(items)
                conexion.commit()
                status = True
            
            except Exception as error :
                print ("Error while fetching data from PostgreSQL", error)
                status = False
            finally:
                if(conexion):
                    cursor.close()
                    conexion.close()
                    print("PostgreSQL connection is closed")
                    return status



class Test():
 
    def  guardar(self, talla , peso , imc):
        try:
            conexion = psycopg2.connect(database="dd1o1liu6nsqob", user="gvjdpzhyjsvfxs", password="5ffbbd36b7bf7d3ff6e7edb572b8667da3b15d4396b445f4e705f13c25f8d075", host="ec2-52-23-190-126.compute-1.amazonaws.com", port="5432")
            cursor = conexion.cursor()
            cursor.execute( "INSERT INTO test(peso , talla, imc) VALUES( %s , %s , %s )", ( peso , talla  , imc))
            conexion.commit()
        except (Exception, psycopg2.Error) as error :
            print ("Error while fetching data from PostgreSQL", error)
        finally:
         #closing database connection.
            if(conexion):
                cursor.close()
                conexion.close()
                print("PostgreSQL connection is closed")

    def consultar(self):
        try:
            conexion = psycopg2.connect(database="dd1o1liu6nsqob", user="gvjdpzhyjsvfxs", password="5ffbbd36b7bf7d3ff6e7edb572b8667da3b15d4396b445f4e705f13c25f8d075",host="ec2-52-23-190-126.compute-1.amazonaws.com", port="5432")

            cursor = conexion.cursor()
            consulta = "SELECT   *  FROM  test"
            cursor.execute(consulta)
            list_test = cursor.fetchall()
            test = []
            for item in list_test:
                items = {"id_test": item[0] , "talla":item[1] , "peso":item[2] , "imc":item[3] }
                test.append(items)
                conexion.commit()
        except (Exception, psycopg2.Error) as error :
            print ("Error while fetching data from PostgreSQL", error)
        finally:
            cursor.close()
            conexion.close()
            return test
    
    def actualizar(self , id_test , peso):

        try:
            conexion = psycopg2.connect(database="dd1o1liu6nsqob", user="gvjdpzhyjsvfxs", password="5ffbbd36b7bf7d3ff6e7edb572b8667da3b15d4396b445f4e705f13c25f8d075", host="ec2-52-23-190-126.compute-1.amazonaws.com", port="5432")
            cursor = conexion.cursor()
            update = "UPDATE test SET peso =%s WHERE id_test = %s"
            cursor.execute(update , (peso , id_test,))
            conexion.commit()
        except (Exception, psycopg2.Error) as error :
            print ("Error while fetching data from PostgreSQL", error)
        finally:
            cursor.close()
            conexion.close()

    







            
    

