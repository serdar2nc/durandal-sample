define(['durandal/plugins/router', './config'], function (router, config) {
    
    return {
        router: router,
        activate: function () {

            router.map(config.routes);

            return router.activate('test/home');

        }
    };
});