from controllers import LoginControllers , TestControllres , PruebaControllers

routes = {
    "login": "/api/v01/login", "LoginControllers":LoginControllers.as_view("login_api"),
    "test":"/api/v01/test","TestControllres":TestControllres.as_view("test_api"),
    "list-test":"/api/v01/list" , "TestControllres":TestControllres.as_view("list_api"),
    "update-test":"/api/v01/update" , "TestControllres":TestControllres.as_view("update_api"),
    "prueba": "/api/v01/prueba", "PruebaControllers":PruebaControllers.as_view("prueba_api"),
}