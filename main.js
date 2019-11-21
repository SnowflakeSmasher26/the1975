var myApp =angular.module("myApps", ['ngRoute'])
    .config(function ($routeProvider){
    $routeProvider
    .when('/the1975',{
        templateUrl: 'The1975/the1975.html',
        // controller: 'the1975CTRL'
    })
    .when('/lany',{
        templateUrl: 'Lany/lany.html',
        // controller: 'lanyCTRL'
    })
    .when('/blink',{
        templateUrl: 'Blink182/blink.html',
        // controller: 'blinkCTRL'
    })
    
    .when('/kendrick',{
        templateUrl: 'KendrickLamar/kendrick.html',
        // controller: 'kendrickCTRL'
    })
    .when('/bone',{
        templateUrl: 'BoneThugs/bone.html',
        // controller: 'boneCTRL'
    })
    .otherwise({
        redirectTo: '/the1975'
    })
})
myApp.controller('myCTRL', function($scope){
    $scope.openNav = function(){
        document.getElementById('mynav').style.width="100%";
    },
    $scope.closeNav = function(){
        document.getElementById('mynav').style.width="0%";
    }
})

// .controller('the1975CTRL', function($scope){
//     $scope.openNav = function(){
//         document.getElementById('mynav').style.width="100%";
//     },
//     $scope.closeNav = function(){
//         document.getElementById('mynav').style.width="0%";
//     }
//     })
// .controller('lanyCTRL', function($scope){
//     $scope.openNav = function(){
//         document.getElementById('mynav').style.width="100%";
//     },
//     $scope.closeNav = function(){
//         document.getElementById('mynav').style.width="0%";
//         };


//     })
// .controller('blinkCTRL', function($scope){
//     $scope.openNav = function(){
//         document.getElementById('mynav').style.width="100%";
//     },
//     $scope.closeNav = function(){
//         document.getElementById('mynav').style.width="0%";
//     };

// })
// .controller('kendrickCTRL', function($scope){
//     $scope.openNav = function(){
//         document.getElementById('mynav').style.width="100%";
//     },
//     $scope.closeNav = function(){
//         document.getElementById('mynav').style.width="0%";
//     };
//     })
// .controller('boneCTRL', function($scope){
//     $scope.openNav = function(){
//         document.getElementById('mynav').style.width="100%";
//     },
//     $scope.closeNav = function(){
//         document.getElementById('mynav').style.width="0%";
//     };
//     })
// function openNav(){
//     document.getElementById('mynav').style.width="100%";
// }
// function closeNav(){
//     document.getElementById('mynav').style.width="0%";
// }