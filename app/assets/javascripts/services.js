System.register(['./messages/messages.service', './messages/threads.service', './user/user.service'], function(exports_1) {
    var messages_service_1, threads_service_1, user_service_1;
    var servicesInjectables;
    var exportedNames_1 = {
        'servicesInjectables': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
                exportStar_1(messages_service_1_1);
            },
            function (threads_service_1_1) {
                threads_service_1 = threads_service_1_1;
                exportStar_1(threads_service_1_1);
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
                exportStar_1(user_service_1_1);
            }],
        execute: function() {
            exports_1("servicesInjectables", servicesInjectables = [
                messages_service_1.messagesServiceInjectables,
                threads_service_1.threadsServiceInjectables,
                user_service_1.userServiceInjectables
            ]);
        }
    }
});
