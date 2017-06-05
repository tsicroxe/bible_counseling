

var app = angular.module('app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'partials/_index.html',
      controller: 'indexController',
      controllerAs: 'ic'
    })
    .when('/biblical_counseling', {
      templateUrl: 'partials/_biblical_counseling.html',
      // controller: 'indexController',
      // controllerAs: 'ic'
    })

    .otherwise({
      redirectTo: '/'
    })

  }])
