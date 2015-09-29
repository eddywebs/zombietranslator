requirejs.config({
    "baseUrl": "js", //this is the path where the js file lives
    "paths": {
        "jquery": "vendors/jquery.min",
        "bootstrap": "vendors/bootstrap.min"
    },
    "shim": {
        "bootstrap": ["jquery"]
    }
});

require(['app']);