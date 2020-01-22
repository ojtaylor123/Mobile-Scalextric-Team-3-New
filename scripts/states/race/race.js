(function() {
  'use strict';
  
  angular.module('app.raceState', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('race', {
      url: '/race',
      templateUrl: 'scripts/states/race/race.html',
      controller: 'raceCtrl as vm',
      cache: false
    });
    $urlRouteProvider.otherwise('/race');
  });
})();
