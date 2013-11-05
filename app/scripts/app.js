'use strict';

angular.module('yoscrumApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ProjectListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
