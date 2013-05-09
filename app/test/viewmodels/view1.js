define(['./counter-parent'], function (CounterVM) {

    var counterVM = new CounterVM({
        increment: 1
    }),

    activate = function () {
        counterVM.activate();
    };

    return {
        counterVM: counterVM,
        activate: activate
    };

});