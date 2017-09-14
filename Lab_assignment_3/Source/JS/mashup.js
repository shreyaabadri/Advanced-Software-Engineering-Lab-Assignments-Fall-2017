socialNetwork.controller('mashupController', function($scope,$http,$sce, $location) {
    var mashupController = this;

    mashupController.fb_Id = JSON.parse(gFbData).id;

    mashupController.videoIdList = new Array();
    gapi.client.setApiKey("AIzaSyA8tuvkSJPIKBTk2ryX6z2PugU1I3Iavfw");
    gapi.client.load('youtube', 'v3', function() {
        //
    });

    mashupController.signOut = function () {
        $location.path("login");
    };


    mashupController.searchVideos=function () {
        var source=document.getElementById("searchKey").value;
        var request = gapi.client.youtube.search.list({
            part: 'snippet',
            type: 'video',
            q: search
        });
        var vid;
        var YTurl1;

            var response=$http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+search+"&type=video&key=AIzaSyA8tuvkSJPIKBTk2ryX6z2PugU1I3Iavfw");
            response.then(function (response) {

            console.log("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q="+search+"&type=video&key=AIzaSyA8tuvkSJPIKBTk2ryX6z2PugU1I3Iavfw")
            for (var i = 0; i < 10; i++) {
                var filter = response.data.items[i].id.videoId;
                mashupController.videoIdList[i] = {
                    "vid": response.data.items[i].id.videoId,
                    "vurl": $sce.trustAsResourceUrl('http://www.youtube.com/embed/'+filter)
                };
            }

                   });
        console.log(response);
    };

};