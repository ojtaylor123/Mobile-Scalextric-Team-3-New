(function () {
  angular.module('myApp', [
    'ui.router'
  ])

    .run(function ($state, $rootScope) {
      $rootScope.$on('$stateChangeError', function (toState, toParams, fromState, fromParams) {
        console.log('$stateChangeStart to ' + toState.to + '- fired when the transition begins. toState,toParams : \n', toState, toParams);

        $state.get('onboarding').error = { code: 123, descriptions: 'Exception stack trace' }
        return $state.go('onboarding');
      });

    })
})();


