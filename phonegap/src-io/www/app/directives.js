/**
 * Created by nico on 3/15/2015.
 */
angular.module("babywords.directives", ["babywords.services"])
    .directive("bwVideoPlayback", function(MediaService) {
        return {

        }
    })
    .directive("bwVideoRecorder", function(MediaService, ErrorService) {
        return {
            link: function(scope, element, attrs) {

            },
            restrict: "E",
            scope: true
        };
    })
    // show notifications added via the NotificationService
    .directive("bwNotification", function(NotificationService) {
        return {
            link: function(scope, element, attrs) {
                scope.getError = NotificationService.getError;
                scope.clearError = NotificationService.clearError;
                scope.getNotification = NotificationService.getNotification;
                scope.clearNotification = NotificationService.clearNotification;
            },
            restrict: "E",
            template: "<div class='alert alert-error' ng-show='getError()'><div class='item item-text-wrap'>{{getError()}}<a class='btn-close' ng-click='clearError()'>&times;</a></div></div>" +
                "<div class='alert alert-info' ng-show='getNotification()'><div class='item item-text-wrap'>{{getNotification()}}<a class='btn-close' ng-click='clearNotification()'>&times;</a></div></div>",
            scope: true
        }
    });