angular.module('gatos')
  .config( function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/home.html',
        controller:'homeController'
    })
      .when('/graphInfo', {
        templateUrl: 'templates/graphInfo.html',
        controller: 'homeController'
    })
    .when('/list', {
        templateUrl: 'templates/list.html',
        controller: 'homeController'
    })
})
