define(['./counter-parent'], function (CounterVM) {

    var counterVM = new CounterVM({
        increment: -1
    });

    return {
        counterVM: counterVM
    };

});