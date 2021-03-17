from controllers import LoginControllers , TestControllres ,   RegisterControllers

routes = {
    "login": "/api/v01/login", "LoginControllers":LoginControllers.as_view("login_api"),
    "test":"/api/v01/test","TestControllres":TestControllres.as_view("test_api"),
    "list-test":"/api/v01/list" , "TestControllres":TestControllres.as_view("list_api"),
    "update-test":"/api/v01/update" , "TestControllres":TestControllres.as_view("update_api"),
}