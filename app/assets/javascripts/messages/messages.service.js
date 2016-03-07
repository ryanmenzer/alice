System.register(['angular2/core', 'rxjs'], function(exports_1, context_1) {
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
    var core_1, rxjs_1;
    var initialMessages, MessagesService, messagesServiceInjectables;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rxjs_1_1) {
                rxjs_1 = rxjs_1_1;
            }],
        execute: function() {
            initialMessages = [];
            MessagesService = (function () {
                function MessagesService() {
                    // a stream that publishes new messages only once
                    this.newMessages = new rxjs_1.Subject();
                    // `updates` receives _operations_ to be applied to our `messages`
                    // it's a way we can perform changes on *all* messages (that are currently
                    // stored in `messages`)
                    this.updates = new rxjs_1.Subject();
                    // action streams
                    this.create = new rxjs_1.Subject();
                    this.markThreadAsRead = new rxjs_1.Subject();
                    this.messages = this.updates
                        .scan(function (messages, operation) {
                        return operation(messages);
                    }, initialMessages)
                        .publishReplay(1)
                        .refCount();
                    // `create` takes a Message and then puts an operation (the inner function)
                    // on the `updates` stream to add the Message to the list of messages.
                    //
                    // That is, for each item that gets added to `create` (by using `next`)
                    // this stream emits a concat operation function.
                    //
                    // Next we subscribe `this.updates` to listen to this stream, which means
                    // that it will receive each operation that is created
                    //
                    // Note that it would be perfectly acceptable to simply modify the
                    // "addMessage" function below to simply add the inner operation function to
                    // the update stream directly and get rid of this extra action stream
                    // entirely. The pros are that it is potentially clearer. The cons are that
                    // the stream is no longer composable.
                    this.create
                        .map(function (message) {
                        return function (messages) {
                            return messages.concat(message);
                        };
                    })
                        .subscribe(this.updates);
                    this.newMessages
                        .subscribe(this.create);
                    // similarly, `markThreadAsRead` takes a Thread and then puts an operation
                    // on the `updates` stream to mark the Messages as read
                    this.markThreadAsRead
                        .map(function (thread) {
                        return function (messages) {
                            return messages.map(function (message) {
                                // note that we're manipulating `message` directly here. Mutability
                                // can be confusing and there are lots of reasons why you might want
                                // to, say, copy the Message object or some other 'immutable' here
                                if (message.thread.id === thread.id) {
                                    message.isRead = true;
                                }
                                return message;
                            });
                        };
                    })
                        .subscribe(this.updates);
                }
                // an imperative function call to this action stream
                MessagesService.prototype.addMessage = function (message) {
                    this.newMessages.next(message);
                };
                MessagesService.prototype.messagesForThreadUser = function (thread, user) {
                    return this.newMessages
                        .filter(function (message) {
                        // belongs to this thread
                        return (message.thread.id === thread.id) &&
                            // and isn't authored by this user
                            (message.author.id !== user.id);
                    });
                };
                MessagesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MessagesService);
                return MessagesService;
            }());
            exports_1("MessagesService", MessagesService);
            exports_1("messagesServiceInjectables", messagesServiceInjectables = [
                core_1.bind(MessagesService).toClass(MessagesService)
            ]);
        }
    }
});
