System.register(['angular2/core', 'rxjs', '../models', './messages.service', 'underscore'], function(exports_1, context_1) {
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
    var core_1, rxjs_1, models_1, messages_service_1, _;
    var ThreadsService, threadsServiceInjectables;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            },
            function (models_1_1) {
                models_1 = models_1_1;
            },
            function (messages_service_1_1) {
                messages_service_1 = messages_service_1_1;
            },
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            ThreadsService = (function () {
                function ThreadsService(messagesService) {
                    this.messagesService = messagesService;
                    // `currentThread` contains the currently selected thread
                    this.currentThread = new rxjs_1.BehaviorSubject(new models_1.Thread());
                    this.threads = messagesService.messages
                        .map(function (messages) {
                        var threads = {};
                        // Store the message's thread in our accumulator `threads`
                        messages.map(function (message) {
                            threads[message.thread.id] = threads[message.thread.id] ||
                                message.thread;
                            // Cache the most recent message for each thread
                            var messagesThread = threads[message.thread.id];
                            if (!messagesThread.lastMessage ||
                                messagesThread.lastMessage.sentAt < message.sentAt) {
                                messagesThread.lastMessage = message;
                            }
                        });
                        return threads;
                    });
                    this.orderedThreads = this.threads
                        .map(function (threadGroups) {
                        var threads = _.values(threadGroups);
                        return _.sortBy(threads, function (t) { return t.lastMessage.sentAt; }).reverse();
                    });
                    this.currentThreadMessages = this.currentThread
                        .combineLatest(messagesService.messages, function (currentThread, messages) {
                        if (currentThread && messages.length > 0) {
                            return _.chain(messages)
                                .filter(function (message) {
                                return (message.thread.id === currentThread.id);
                            })
                                .map(function (message) {
                                message.isRead = true;
                                return message;
                            })
                                .value();
                        }
                        else {
                            return [];
                        }
                    });
                    this.currentThread.subscribe(this.messagesService.markThreadAsRead);
                }
                ThreadsService.prototype.setCurrentThread = function (newThread) {
                    this.currentThread.next(newThread);
                };
                ThreadsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [messages_service_1.MessagesService])
                ], ThreadsService);
                return ThreadsService;
            }());
            exports_1("ThreadsService", ThreadsService);
            exports_1("threadsServiceInjectables", threadsServiceInjectables = [
                core_1.bind(ThreadsService).toClass(ThreadsService)
            ]);
        }
    }
});
