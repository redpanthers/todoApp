toDo = window.toDo || {}
toDo = angular.module('toDo',['ui.router','templates','Devise']);
toDo.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/')
  $stateProvider.state('todo',{
        url: '/',
        controller: 'todoController',
        templateUrl: 'view/index.html'
      }).
      state('create',{
        url:'/create',
        controller: 'todoController',
        templateUrl: 'view/create.html'
      })
      .state('register',{
        url:'/register',
        controller:'registerController',
        templateUrl:'view/register.html'
      })

}]);
