define(['durandal/plugins/router',
    './config'],
    function (router, config) {

        var activate = function () {
            router.map(config.routes);
            return router.activate('test/home');
        };

        return {
            router: router,
            activate: activate
        };

    });