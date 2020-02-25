(function () {

    'use strict';

    var app = angular.module('app.raceState');

    app.controller('raceCtrl', raceCtrl);

    raceCtrl.$inject = [];

    function raceCtrl() {
        var vm = angular.extend(this, {});
        return vm;
    }
    
    function weaponBox() {


            var myArray = [
            "Oil Slick",
            "Smart Bomb",
            "Puncture"
            ];
        
            var randomWeapon = myArray[Math.floor(Math.random()*myArray.length)]; 
            
            document.getElementById('weapon').innerHTML = randomWeapon;
        
        }

        setInterval(weaponBox, 5000)
})();
