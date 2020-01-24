(function () {
  var app = angular.module("myApp", ['ui.router']);
  
  app.run(function ($state, $rootScope) {
    $rootScope.$on('$stateChangeError', function (toState, toParams, fromState, fromParams){
      console.log('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);
    
      $state.get('race')
    });
  })
})();


