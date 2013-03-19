define(['durandal/plugins/router'], function (router) {
    
    return {
        router: router,
        activate: function () {
            router.map([
                { url: 'hello', moduleId: 'steve/hello/index', name:'Hello', visible: true },
                { url: 'test', moduleId: 'steve/test/index', name:'Test', visible: true },
                { url: 'twitter', moduleId: 'steve/twitter/index', name:'Twitter', visible: true }
            ]);
            
            return router.activate('hello');
        }
    };
});