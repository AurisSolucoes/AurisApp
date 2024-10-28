
    var spa = angular.module("App", ["ngRoute"])

    spa.config(function($routeProvider){
        $routeProvider
        .when("/", {
            templateUrl : "/web/login.html"
        })
        .when("/registrar", {
            templateUrl : "/web/registrar.html"
        })
        .when("/home", {
            templateUrl : "/web/home.html" + ""
        })
        .otherwise({redirectTo: '/'})
    })