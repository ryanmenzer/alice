System.register(['./util/uuid'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var uuid_1;
    var User, Thread, Message;
    return {
        setters:[
            function (uuid_1_1) {
                uuid_1 = uuid_1_1;
            }],
        execute: function() {
            User = (function () {
                function User(name, avatarSrc) {
                    this.name = name;
                    this.avatarSrc = avatarSrc;
                    this.id = uuid_1.uuid();
                }
                return User;
            }());
            exports_1("User", User);
            Thread = (function () {
                function Thread(id, name, avatarSrc) {
                    this.id = id || uuid_1.uuid();
                    this.name = name;
                    this.avatarSrc = avatarSrc;
                }
                return Thread;
            }());
            exports_1("Thread", Thread);
            Message = (function () {
                function Message(obj) {
                    this.id = obj && obj.id || uuid_1.uuid();
                    this.isRead = obj && obj.isRead || false;
                    this.sentAt = obj && obj.sentAt || new Date();
                    this.author = obj && obj.author || null;
                    this.text = obj && obj.text || null;
                    this.thread = obj && obj.thread || null;
                }
                return Message;
            }());
            exports_1("Message", Message);
        }
    }
});
