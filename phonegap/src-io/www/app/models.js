angular.module("babywords.models", ["babywords.services"])
    .factory("WordsModel", function (WordsDataService, MediaService, $q) {
        var selectedWord = null;

        return {
            getSelectedWord: function() {
                return selectedWord;
            },

            setSelectedWord: function(word) {
                selectedWord = word;
            },

            getAllWords: function() {
                return WordsDataService.getWords();
            },

            // save selected word, this is asynchronous since it may need to access the filesystem to save the temporary recording
            saveSelectedWord: function () {
                var q;
                if (selectedWord.recordingSource) {
                    q = MediaService.saveRecording(selectedWord.recordingSource).then(function (src) {
                        console.log("Recording saved " + src);
                        selectedWord.recordingSource = src;
                    });
                } else {
                    q = $q.defer();
                    q.resolve();
                    q = q.promise;
                }
                return q.then(function () {
                    console.log("SAVE WORD");
                    delete selectedWord.isNew;
                    WordsDataService.saveWord(selectedWord);
                });
            },

            deleteSelectedWord: function() {
                WordsDataService.removeWord(selectedWord);
                selectedWord = null;
            },

            newWord: function() {
                selectedWord = {
                    when: new Date(),
                    word: "",
                    soundedLike: "1",
                    context: "",
                    recordingSource: "",
                    isNew: true
                };
                return selectedWord;
            }
        }
    });