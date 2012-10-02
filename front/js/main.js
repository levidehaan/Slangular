var slangular = angular.module("slangular", []);

angular.module("slangularRoute", [], function($routeProvider, $locationProvider) {
    var self = this;

    $routeProvider.when("/view:taskid", {
        templateUrl:"main/taskListing",
        controller: taskListingCtrl
    });

  
});

function parseDevice(obj) {
    var device, retObj = {};

    //for retina screens showing under 800 pixels without multiplier.
    if (!window.devicePixelRatio) {
        window.devicePixelRatio = 1;
    }
    //set real device screen width
    slangular.deviceWidth = document.documentElement.clientWidth * window.devicePixelRatio;

    switch (true) {
        //remove instances of mobile from object
        case (slangular.deviceWidth > 768):
            device = "mobile";
            break;
        //remove instances of desktop from object
        case (slangular.deviceWidth < 768):
            device = "desktop";
            break;
    }

    //iterate over to remove instances of device
    $.each(obj, function (dex, val) {
        if (dex.indexOf(device) != -1) {
            delete obj[dex];
        }

    });

    return obj;
}