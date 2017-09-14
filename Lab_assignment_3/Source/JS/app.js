var socialNetwork = angular.module('socialNetwork', ['ngSanitize']);
var gUserData = '';
var gFbData = '';

socialNetwork.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html',
            controller: 'loginController',
            controllerAs: 'loginController'
        })

        .when('/clientMashUp', {
            templateUrl: 'mashup.html',
            controller: 'mashupController',
            controllerAs: 'mashupController'
        })
        .otherwise({ redirectTo: '/' });

});

gapi.client.setApiKey("AIzaSyCOqH_vnwEHT95mXxau2afRylpgNsIXtA4");
gapi.client.load('youtube', 'v3', function() {
    //
});

socialNetwork.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://www.youtube.com/**'
    ]);
});


function FBlogin() {



    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = function() {
        FB.init({
            appId      : '267110513721091',
            cookie     : true,
            xfbml      : true,
            version    : 'v2.5'
        });

        FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                    console.log('Welcome to Client MashUp, ' + response.name + '.');
                    console.log(JSON.stringify(response));
                    gFbData = JSON.stringify(response);
                    window.location.href = window.location + 'clientMashUp';
                });
            } else {
                console.log('User cancelled login or did not fully authorize.');
            }
        });

        FB.getLoginStatus(function(response) {
            console.log(response.status);
        });
    };
};

socialNetwork.directive('onlyDigits', function () {
    return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, element, attrs, modelCtrl) {
            modelCtrl.$parsers.push(function (inputValue) {
                if (inputValue == undefined) return '';
                var transformedInput = inputValue.replace(/[^0-9]/g, '');
                if (transformedInput !== inputValue) {
                    modelCtrl.$setViewValue(transformedInput);
                    modelCtrl.$render();
                }
                return transformedInput;
            });
        }
    };

});
