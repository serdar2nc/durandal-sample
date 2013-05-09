define(function () {

    'use strict';

    var routes = [
        {
            url: 'test/home',
            moduleId: 'test/viewmodels/home',
            name: 'Home'
        },
        {
            url: 'test/view1',
            moduleId: 'test/viewmodels/view1',
            name: 'Counter 1'
        },
        {
            url: 'test/view2',
            moduleId: 'test/viewmodels/view2',
            name: 'Counter 2'
        }
    ];

    return {
        routes: routes
    };

});