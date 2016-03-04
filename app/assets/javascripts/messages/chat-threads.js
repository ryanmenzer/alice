System.register(['angular2/core', '../services'], function(exports_1, context_1) {
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
    var core_1, services_1;
    var ChatThread, ChatThreads;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (services_1_1) {
                services_1 = services_1_1;
            }],
        execute: function() {
            ChatThread = (function () {
                function ChatThread(threadsService) {
                    this.threadsService = threadsService;
                    this.selected = false;
                }
                ChatThread.prototype.ngOnInit = function () {
                    var _this = this;
                    this.threadsService.currentThread
                        .subscribe(function (currentThread) {
                        _this.selected = currentThread &&
                            _this.thread &&
                            (currentThread.id === _this.thread.id);
                    });
                };
                ChatThread.prototype.clicked = function (event) {
                    this.threadsService.setCurrentThread(this.thread);
                    event.preventDefault();
                };
                ChatThread = __decorate([
                    core_1.Component({
                        inputs: ['thread'],
                        selector: 'chat-thread',
                        template: "\n  <div class=\"media conversation\">\n    <div class=\"pull-left\">\n      <img class=\"media-object avatar\"\n           src=\"{{thread.avatarSrc}}\">\n    </div>\n    <div class=\"media-body\">\n      <h5 class=\"media-heading contact-name\">{{thread.name}}\n        <span *ngIf=\"selected\">&bull;</span>\n      </h5>\n      <small class=\"message-preview\">{{thread.lastMessage.text}}</small>\n    </div>\n    <a (click)=\"clicked($event)\" class=\"div-link\">Select</a>\n  </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [services_1.ThreadsService])
                ], ChatThread);
                return ChatThread;
            }());
            ChatThreads = (function () {
                function ChatThreads(threadsService) {
                    this.threadsService = threadsService;
                    this.threads = threadsService.orderedThreads;
                }
                ChatThreads = __decorate([
                    core_1.Component({
                        selector: 'chat-threads',
                        directives: [ChatThread],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPushObserve,
                        template: "\n    <!-- conversations -->\n    <div class=\"row\">\n      <div class=\"conversation-wrap\">\n\n        <chat-thread\n             *ngFor=\"#thread of threads | async\"\n             [thread]=\"thread\">\n        </chat-thread>\n\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [services_1.ThreadsService])
                ], ChatThreads);
                return ChatThreads;
            }());
            exports_1("ChatThreads", ChatThreads);
        }
    }
});
//# sourceMappingURL=chat-threads.js.map