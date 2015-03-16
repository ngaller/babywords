angular.module('babywords.controllers', ["babywords.models", "babywords.services"])
    // top level controller used for error reporting and such
    .controller("AppCtrl", function ($scope) {

    })
    .controller("WordListCtrl", function ($scope, $location, WordsModel) {
        $scope.words = WordsModel.getAllWords();

//        $scope.on();
        $scope.viewWord = function (w) {
            WordsModel.setSelectedWord(w);
            $location.path("/words/edit");
        }
    })
    .controller("WordEditCtrl", function ($scope, $location, WordsModel) {
        $scope.selectedWord = WordsModel.getSelectedWord();

        $scope.save = function () {
            alert("SAVE");
            WordsModel.saveSelectedWord().then(function () {
                $location.back();
            })
        }
        $scope.remove = function () {
            WordsModel.deleteSelectedWord();
            $location.back();
        }
        $scope.cancel = function () {
            $location.back();
        }
    })
    .controller("WordNewCtrl", function ($scope, $location, WordsModel) {
        $scope.selectedWord = WordsModel.newWord();

        $scope.save = function () {
            WordsModel.saveSelectedWord().then(function () {
                $location.back();
            })
        }
        $scope.cancel = function () {
            $location.back();
        }
    });
