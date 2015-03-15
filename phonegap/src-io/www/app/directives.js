/**
 * Created by nico on 3/15/2015.
 */
angular.module("babywords.directives", ["babywords.services"])
    .directive("bwVideoRecorder", function(MediaService, ErrorService) {

    })
    .directive("bwNotification", function(NotificationService) {
        return {
            link: function(scope, element, attrs) {
                scope.getError = NotificationService.getError;
                scope.clearError = NotificationService.clearError;
                NotificationService.setError("ERROR ERROR");
            },
            restrict: "E",
            template: "<div class='alert alert-error' ng-show='getError()'>{{getError()}}<a class='btn-close' ng-click='clearError()'>&times;</a></div>" +
                "<div class='alert alert-info' ng-show='getNotice()'>{{getNotice()}}<a class='btn-close' ng-click='clearNotice()'>&times;</a></div>",
            scope: true
        }
    });