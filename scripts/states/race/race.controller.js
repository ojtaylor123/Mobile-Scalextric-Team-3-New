(function() {
  'use strict';
  
  angular.module('app.raceState').controller('raceCtrl', raceCtrl);
  
  raceCtrl.$inject = [
    '$scope',
    '$timeout',
    '$q',
    'locationsSrvc',
    'sightingSrvc,
    '$state',
    'toaster'    
  ];
})();
