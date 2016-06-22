"use strict";

angular.module("jtt_aping_blanko", [])
    .directive('apingBlanko', ['apingUtilityHelper', function (apingUtilityHelper) {
        return {
            require: '?aping',
            restrict: 'A',
            replace: 'false',
            link: function (scope, element, attrs, apingController) {

                var appSettings = apingController.getAppSettings();

                var requests = apingUtilityHelper.parseJsonFromAttributes(attrs.apingBlanko, "blanko", appSettings);

                requests.forEach(function (request) {

                    var resultArray = [];

                    //fill resultArray;

                    apingController.concatToResults(resultArray);

                });
            }
        }
    }]);