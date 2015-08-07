toDo = window.toDo || {}
toDo = angular.module('toDo',['ui.router','templates']);
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

}]);