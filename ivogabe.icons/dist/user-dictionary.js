define(["require", "exports"], function (require, exports) {
    var UserDictionary = (function () {
        function UserDictionary(settings) {
            this.settings = settings;
        }
        UserDictionary.prototype.findExtension = function (extension) {
            return this.settings[extension];
        };
        UserDictionary.prototype.findExtensionPrefix = function (extension) {
            return this.settings[extension];
        };
        UserDictionary.prototype.findFullFileName = function (extension) {
            return this.settings[extension];
        };
        UserDictionary.prototype.findFileName = function (fileName, extension) {
            return this.settings[extension];
        };
        UserDictionary.prototype.getEmptyItem = function (fileName) {
            return undefined;
        };
        return UserDictionary;
    })();
    exports.UserDictionary = UserDictionary;
});
