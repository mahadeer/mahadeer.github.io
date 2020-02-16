function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

function Channel(initState) {
    this.__state = Object.assign({}, initState);
    this.__subscribers = {
        next: {},
        error: {},
        complete: {}
    };
}

Channel.prototype = {
    hasSubscribers: function () {
        return Object.values(this.__subscribers.next).length > 0;
    },
    reset: function () {
        this.__state = {};
        this.__subscribers = {
            next: {},
            error: {},
            complete: {}
        };
    },
    get: function (propName) {
        return this.__state[propName];
    },
    set: function (propName, propValue) {
        this.__state[propName] = propValue;
        this.next(Object.assign({}, this.__state));
    },
    next: function (state) {
        const me = this;
        this.__state = Object.assign({}, state);
        Object.values(this.__subscribers.next).forEach(function (nextFn) {
            nextFn(me.__state);
        });
    },
    complete: function (finalState) {
        this.next(finalState);
        Object.values(this.__subscribers.complete).forEach(function (completeFn) {
            completeFn();
        });
        this.reset();
    },
    subscribe: function (onNextFn, onErrorFn, onCompleteFn) {
        const uuid = uuidv4();
        this.__subscribers.next[uuid] = onNextFn;
        this.__subscribers.complete[uuid] = onCompleteFn;
        this.__subscribers.error[uuid] = onErrorFn;
        return {
            unsubscribe: function () {
                delete this.__subscribers.next[uuid];
                delete this.__subscribers.error[uuid];
                delete this.__subscribers.complete[uuid];
            }.bind(this)
        };
    }
}

