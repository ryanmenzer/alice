System.register(['angular2/core', '../dashboard/nav-bar', './ChatThreads', './ChatWindow', '../services', './ChatExampleData'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, nav_bar_1, ChatThreads_1, ChatWindow_1, services_1, ChatExampleData_1;
    var ChatComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nav_bar_1_1) {
                nav_bar_1 = nav_bar_1_1;
            },
            function (ChatThreads_1_1) {
                ChatThreads_1 = ChatThreads_1_1;
            },
            function (ChatWindow_1_1) {
                ChatWindow_1 = ChatWindow_1_1;
            },
            function (services_1_1) {
                services_1 = services_1_1;
            },
            function (ChatExampleData_1_1) {
                ChatExampleData_1 = ChatExampleData_1_1;
            }],
        execute: function() {
            ChatComponent = (function () {
                function ChatComponent(messagesService, threadsService, userService) {
                    this.messagesService = messagesService;
                    this.threadsService = threadsService;
                    this.userService = userService;
                    ChatExampleData_1.ChatExampleData.init(messagesService, threadsService, userService);
                }
                ChatComponent = __decorate([
                    core_1.Component({
                        template: "\n  <div>\n    <nav-bar></nav-bar>\n    <div class=\"container\">\n      <chat-threads></chat-threads>\n      <chat-window></chat-window>\n    </div>\n  </div>\n  ",
                        directives: [nav_bar_1.ChatNavBar, ChatThreads_1.ChatThreads, ChatWindow_1.ChatWindow]
                    }), 
                    __metadata('design:paramtypes', [services_1.MessagesService, services_1.ThreadsService, services_1.UserService])
                ], ChatComponent);
                return ChatComponent;
            }());
            exports_1("ChatComponent", ChatComponent);
        }
    }
});
