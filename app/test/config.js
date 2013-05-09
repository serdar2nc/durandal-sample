define(function () {

    'use strict';

    var routes = [
        {
            url: 'test/home',
            moduleId: 'test/viewmodels/home'
        },
        {
            url: 'test/view1',
            moduleId: 'test/viewmodels/view1'
        },
        {
            url: 'test/view2',
            moduleId: 'test/viewmodels/view2'
        }
    ];

    return {
        routes: routes
    };

});