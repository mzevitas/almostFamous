 var app = angular.module('AlmostFamous', ['ui.router']);



 app.config(function($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.otherwise('/');

     $stateProvider.state('home', {
         url: '/',
         templateUrl: '../views/home.html'
     })
     .state('about', {
         url: '/about',
         templateUrl: '../views/about.html'
     })
     .state('events', {
         url: '/events',
         templateUrl: '../views/events.html'
     })
     .state('booking', {
         url: '/booking',
         templateUrl: '../views/booking.html'
     })
     .state('songs', {
         url: '/songs',
         templateUrl: '../views/songs.html'
     });



 });



$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
$('#overlay').click(function(){
    $(this).toggleClass('active');
    $('.overlay').removeClass('open');
    $('#toggle').toggleClass('active');
});
