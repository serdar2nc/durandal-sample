requirejs.config({
    paths: {
        'text': 'durandal/amd/text'
    }
});

define(['durandal/app', 'durandal/system', 'durandal/viewLocator'],
  function (app, system, viewLocator) {
    
    system.debug(true);
    
    app.title = 'Steve Test';
    app.start().then(function () {

        viewLocator.useConvention();

        app.adaptToDevice();
        app.setRoot('steve/shell');
    });
});