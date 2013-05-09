requirejs.config({
    paths: {
        'text': 'durandal/amd/text',
        'moment': '../scripts/moment.min'
    }
});

define(['durandal/app',
    'durandal/system',
    'durandal/viewLocator',
    'durandal/plugins/router',
    'moment'],
    function (app, system, router, viewLocator) {

        system.debug(true);

        app.title = 'Steve Test';
        app.start().then(function () {

            router.useConvention();
            viewLocator.useConvention();

            // change this back to 'samples/shell' to view the durandal examples
            app.setRoot('test/shell');
        });
    });