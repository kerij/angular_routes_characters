console.log("ready");

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/harry', {
      templateUrl: '/views/partials/harry.html',
      controller: 'harryController'
    }).
    when('/hermione', {
      templateUrl: '/views/partials/hermione.html',
      controller: 'hermioneController'
    }).
    when('/ron', {
      templateUrl: '/views/partials/ron.html',
      controller: 'ronController'
    }).otherwise({
      redirectTo: '/harry'
    });
}]);

myApp.controller('harryController', ['$scope', function($scope){

}]);
myApp.controller('hermioneController', ['$scope', function($scope){

}]);
myApp.controller('ronController', ['$scope', function($scope){

}]);
