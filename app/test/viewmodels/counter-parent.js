define(function () {

    return CounterView = function (args) {

        var increment = args ? args.increment : 1,

            interval = 1000,

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
                        counter(counter() + increment);
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

    };

});