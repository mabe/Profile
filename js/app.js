requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min",
      "impress": "impress.js"
    }
});

requirejs(["app/main"]);
