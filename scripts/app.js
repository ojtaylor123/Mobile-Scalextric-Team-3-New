var app = angular.module("myApp", []);

$stateProvider.state(onboardingState);
$stateProvider.state(queueState);
$stateProvider.state(raceState);
$stateProvider.state(casualState);
$stateProvider.state(singleplayerState);
$stateProvider.state(winState);
$stateProvider.state(loseState);
