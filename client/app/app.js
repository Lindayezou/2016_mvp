angular.module('SecretSanta', [
  'SecretSanta.list',
  'SecretSanta.services',
  'ngRoute'
])  

.config(function ($routeProvider) {
  $routeProvider
    .when('/listinput', {
      templateUrl: 'app/list/list.html',
      controller: 'ListController'
    })

    .otherwise({
      redirectTo: '/'
    })
});
