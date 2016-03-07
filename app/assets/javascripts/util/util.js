System.register(['./FromNowPipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FromNowPipe_1;
    var utilInjectables;
    return {
        setters:[
            function (FromNowPipe_1_1) {
                FromNowPipe_1 = FromNowPipe_1_1;
            }],
        execute: function() {
            exports_1("utilInjectables", utilInjectables = [
                FromNowPipe_1.fromNowPipeInjectables
            ]);
        }
    }
});
