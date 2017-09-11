

var app = angular.module('app', ['ngRoute', 'ngAnimate'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'partials/_index.html',
      controller: 'indexController',
      controllerAs: 'ic'
    })
    .when('/biblical_counseling', {
      templateUrl: 'partials/_biblical_counseling.html',
    })
    .when('/about', {
      templateUrl: 'partials/_about.html',
    })
    .when('/contact', {
      templateUrl: 'partials/_contact.html',
    })
    .when('/faq', {
      templateUrl: 'partials/_faq.html',
    })
    .otherwise({
      redirectTo: '/'
    })

  }])
