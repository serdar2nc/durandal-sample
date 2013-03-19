requirejs.config({
    paths: {
        'text': 'durandal/amd/text',
        'moment': '../scripts/moment.min'
    }
});

define(['durandal/app', 'durandal/system', 'durandal/viewLocator', 'moment'],
  function (app, system, viewLocator) {

    system.debug(true);
    
    app.title = 'Steve Test';
    app.start().then(function () {

        viewLocator.useConvention();

        app.adaptToDevice();

        // change this back to 'samples/shell' to view the durandal examples
        app.setRoot('steve/shell');
    });
});