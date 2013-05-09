define(function () {

    var interval = 1000,

        timer = null,

        counter = ko.observable(0),

        isRunning = ko.observable(false),

        activate = function () {
            startCounter();
        },

        startCounter = function () {
            if (timer === null) {
                isRunning(true);
                timer = setInterval(function () {
                    counter(counter() + 1);
                }, interval);
            }
        },

        stopCounter = function () {
            clearInterval(timer);
            timer = null;
            isRunning(false);
        };

    return {
        activate: activate,
        counter: counter,
        stopCounter: stopCounter,
        startCounter: startCounter,
        isRunning: isRunning
    };

});