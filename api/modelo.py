import psycopg2



class User():

      def  guardar(self,  userName ,  userPass):
        try:
            conexion = psycopg2.connect( user="postgres",password="valeria1",host="127.0.0.1",port="5432",database="proyecto")

            cursor = conexion.cursor()
            cursor.execute( "INSERT INTO usuarios (user_name, user_pass) VALUES( %s , %s  )", ( userName , userPass))
            conexion.commit()
        except (Exception, psycopg2.Error) as error :
            print ("Error while fetching data from PostgreSQL", error)
        finally:
         #closing database connection.
            if(conexion):
                cursor.close()
                conexion.close()
                print("PostgreSQL connection is closed")

class Login():
    
    #se creea el modelo para gestionar el login 
    
        def  ingresar(self, username , password):
            try:
                conexion = psycopg2.connect( user="postgres",password="valeria1",host="127.0.0.1",port="5432",database="proyecto")

                cursor = conexion.cursor()

                login = "SELECT  username , pass FROM  usuarios WHERE username=% AND pass=%";

                cursor.execute(conexion , (username , password,))

                usuario = cursor.fetchall()

            except (Exception, psycopg2.Error) as error :
                print ("Error while fetching data from PostgreSQL", error)
            finally:
                if(conexion):
                    cursor.close()
                    conexion.close()
                    print("PostgreSQL connection is closed")



class Test():
 
    def  guardar(self, talla , peso , imc):
        try:
            conexion = psycopg2.connect( user="postgres",password="valeria1",host="127.0.0.1",port="5432",database="proyecto")

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
            conexion = psycopg2.connect( user="postgres",password="valeria1",host="127.0.0.1",port="5432",database="proyecto")

            cursor = conexion.cursor()

            consulta = "SELECT   *  FROM  test"
            cursor.execute(consulta)
            list_test = cursor.fetchall()
            test =[]
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
            conexion = psycopg2.connect( user="postgres",password="valeria1",host="127.0.0.1",port="5432",database="proyecto")

            cursor = conexion.cursor()

            update = "UPDATE test SET peso =%s WHERE id_test = %s"
            cursor.execute(update , (peso , id_test,))
            conexion.commit()
        except (Exception, psycopg2.Error) as error :
            print ("Error while fetching data from PostgreSQL", error)
        finally:
            cursor.close()
            conexion.close()

    







            
    

