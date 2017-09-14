var app=angular.module("translateSearch",[]);
socialNetwork.controller('mashupController', function($scope,$http) {

    $scope.translateSearch = function () {
        var source = document.getElementById('searchKey').value;
        var language = document.getElementById('slct').value;
        $http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170913T030534Z.9dc5ac73c462f398.1b11f579d830d461de070427513917683d2a099a&text=' + source + '&lang=' + language).success(function (data) {
            console.log(data);
            $scope.output = data.text;
        })
    }
})
