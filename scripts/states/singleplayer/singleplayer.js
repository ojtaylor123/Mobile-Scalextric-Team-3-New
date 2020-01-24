var myApp = angular.module('singleplayerState', ['ui.router']);

myApp.config(function($stateProvider) {
  var singleplayerState = {
    name: 'singleplayer',
    url: '/singleplayer',
    template: '<h3>singleplayer</h3>'
  }

  $stateProvider.state(singelplayerState);

});


