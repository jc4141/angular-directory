//Pass myApp module an array.  First, we're essentially registering ngRoute
//with the module.  Second, we're defining the js that will handle this module.
var myApp = angular.module('myApp', [
    'ngRoute',
    'actorControllers'
]);

//Tell angular that we'll be using the $routeProvider service and execute a function 
//and pass along that service.
myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'ListController'
    }).
    //Note that I think this is where we are defining the variable to be named itemID.
    //It can have any name as long as you match it up on the $routeParams variable in the controller.
    //From tutorial: To store route parameters in $routeParams use “ : “after the slash ” / ” followed by parameter name. 
    //The character or value up to next slash “/” will be stored in the name.
    when('/details/:itemId', {  
        templateUrl: 'partials/details.html',
        controller: 'DetailsController'
    }).
    when('/movies', {
        templateUrl: 'partials/movies.html',
        controller: 'MoviesController'
    }).
    when('/flickr', {
        templateUrl: 'partials/flickr.html',
        controller: 'FlickrController'
    }).
    otherwise({
        redirectTo: '/list'
    });
}]);