"use strict";
apingApp.config(['$provide', function ($provide) {

    $provide.value("apingDefaultSettings", {
        apingApiKeys: {}
    });

}]);