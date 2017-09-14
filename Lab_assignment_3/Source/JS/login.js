socialNetwork.controller('loginController', ['$scope', '$location', '$window', function($scope, $location, $window) {

    var loginController = this;

    $window.document.title = "Login";
    $("#welcome_image_container").hide();


    loginController.registerUser = function () {
        if(loginController.register_Email === null || loginController.register_Email === undefined || loginController.register_Email === '' || loginController.register_Name === null || loginController.register_Name === undefined || loginController.register_Name === '' || loginController.register_MobileNo === null || loginController.register_MobileNo === undefined || loginController.register_MobileNo === '' || loginController.register_Password === null || loginController.register_Password === undefined || loginController.register_Password === '') {
                alert("Please enter all data fields to register.");
        }
        else {
            if(loginController.register_Password === loginController.register_ConfirmPassword){
                var data = {
                    'email': loginController.register_Email,
                    'name': loginController.register_Name,
                    'MobileNo': loginController.register_MobileNo,
                    'Password': loginController.register_Password
                }
                var email = loginController.register_Email;
                localStorage.setItem(email, JSON.stringify(data));
                $('.register-modal').modal('hide');

            }
            else
            {
                alert("Password mismatch. Please enter same password..");
            }

        }
    };

    loginController.showUserPicture = function () {
        var keys = localStorage.getItem(loginController.login_email);
        if(keys !== null || keys !== '' || keys !== undefined) {
            $("#welcome_image_container").show();
            var dataImage = JSON.parse(keys).Picture;
           bannerImg = document.getElementById('user_welcome_image');
            bannerImg.src =  dataImage;
            gUserData = JSON.parse(keys);
       }
        else {
            $("#welcome_image_container").hide();
            gUserData = '';
        }
    };

    loginController.signIn = function () {
        var keys = localStorage.getItem(loginController.login_email);
        if(keys === null || keys === '' || keys === undefined){
            alert('Please enter valid email and password to login.');
        }
        else if(JSON.parse(keys).Password !== loginController.login_password){
            alert('Please enter correct password to login.');
        }
        else
        {
            $window.location.assign("mashup.html");
    }
    };
}
]);