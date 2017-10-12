angular.module('starter.controllers', [])
.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $location , $cordovaOauth) {
  // Form data for the login modal
  $scope.check = {};
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  //Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  $scope.FBlogin= function () {

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '370956996666740',
                cookie     : true,  // enable cookies to allow the server to access
                                    // the session
                xfbml      : true,  // parse social plugins on this page
                version    : 'v2.5' // use graph api version 2.5
            });

            FB.login(function(response) {
                if (response.authResponse) {
                    console.log('Fetching your information.... ');
                    FB.api('/me', function(response) {
                        console.log('Good to see you, ' + response.name + '.');
                        
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            });
           
            FB.getLoginStatus(function(response) {
                console.log(response.status);
            });
        };
    }
  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Login...', $scope.check);
    $cordovaOauth.google("637661092674-bl1jv0mnlj8o34qp1t92cau3shkq3rdh.apps.googleusercontent.com", ["https://www.googleapis.com/auth/urlshortener", "https://www.googleapis.com/auth/userinfo.email"]).then(function(result) {
            console.log(JSON.stringify(result));
        }, function(error) {
            console.log(error);
        });
  }
})
.controller('Register', function($scope, $ionicModal, $timeout){
   //registration  modal
  $scope.check2 = {};
  // Create the register modal that we will use later
  $ionicModal.fromTemplateUrl('templates/registration.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  // Triggered in the register modal to close it
  $scope.closeRegister = function() {
    $scope.modal.hide();
  };
  // Open the register modal 
  $scope.register = function() {
    $scope.modal.show();
  }; 
  // Perform the register action when the user submits the login form  
  $scope.doRegister = function() {
    console.log('Registering..', $scope.check2);
    // Simulate a register delay
    $timeout(function() {
      $scope.closeRegister();
    },1000);
  };
})
.controller('mySa', function ($scope, $http){
            $scope.checkSentiment = function(){
                var emo = $scope.data1;
                var callback =$http.get('http://gateway-a.watsonplatform.net/calls/text/TextGetTextSentiment?apikey=5843303f5348f644d70585f140b295db23aa4643&outputMode=json&text='+emo);
                callback.success(function (data) {
                    if(data!=null && data.docSentiment!=null)
                    {
                        $scope.sascore = "Score is " + data.docSentiment.score;
                        $scope.satype = "Type  is " + data.docSentiment.type;
                    }
                })
            }
})
.controller('myTos', function ($scope, $http){
            $scope.ttos = function(){
                 var text=$scope.data1;
                 var textToSpeechUrl='https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=b234d9a3-d86a-4476-9c56-07173e317489&password=0pmyS3pDPqUv&text='+text;
                 document.getElementById("audio").innerHTML= "<video controls='' autoplay='' name='media'><source src='"+textToSpeechUrl+"' type='audio/ogg'></video>";
            }
});