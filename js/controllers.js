'use strict';

var motoAppControllers = angular.module('motoAppControllers', []);

motoAppControllers.controller('motosListCtrl', ['$scope', 'Moto',
  function($scope, Moto) {
      $scope.motos = Moto.getMoto();
      $scope.orderProp = 'model';
}]);

motoAppControllers.controller('motosDetallesCtrl', ['$scope', '$routeParams', 'Moto',
  function($scope, $routeParams, Moto) {
    $scope.moto = Moto.get({motoId: $routeParams.motoId}, function(moto) {
      $scope.mainImageUrl = moto.imagenes[0];
    });
    $scope.setImage = function(imageUrl){
      $scope.mainImageUrl = imageUrl;
    }
}]);
