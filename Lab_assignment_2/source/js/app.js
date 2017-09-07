angular.module('indexapp', [])
    .controller('index', function ($scope) {
        $scope.Login = function () {
            window.close();
            window.open("./login.html");
        }

        $scope.Register = function () {
            window.close();
            window.open("./register.html");
        }

    });