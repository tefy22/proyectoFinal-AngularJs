'use strict';

var motoApp = angular.module('motoApp', [
  'ngRoute',
  'motoAppAnimations',
  'motoAppControllers',
  'motoAppServices'
]);

motoApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/motos', {
      templateUrl: 'vistas/lista-motos.html',
      controller: 'motosListCtrl'
    }).
    when('/motos/:motoId', {
      templateUrl: 'vistas/detalles-motos.html',
      controller: 'motosDetallesCtrl'
    }).
    otherwise({
      redirectTo: '/motos'
    });
  }]);
