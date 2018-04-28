var _ = require('underscore')
var path = require('path')


var routes = [


    
    
    
    
    
    // All other get requests should be handled by AngularJS's client-side routing system
    {
        path: '/',
        httpMethod: 'GET',
        middleware: [function (req, res) {
            //console.log(req);
            console.log(__dirname);
            res.sendFile('index.html', { root: __dirname });

        }]
    }

];




module.exports = function (app) {

    _.each(routes, function (route) {
        var args = _.flatten([route.path, route.middleware]);

        switch (route.httpMethod.toUpperCase()) {
            case 'GET':
                app.get.apply(app, args);
                break;
            case 'POST':
                app.post.apply(app, args);
                break;
            case 'PUT':
                app.put.apply(app, args);
                break;
            case 'DELETE':
                app.delete.apply(app, args);
                break;
            default:
                throw new Error('Invalid HTTP method specified for route ' + route.path);
                break;
        }
    });
}