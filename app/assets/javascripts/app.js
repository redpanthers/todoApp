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
      .state('mytodos',{
        url:'/view_todos',
        controller: 'todoController',
        templateUrl: 'view/todos.html'
      })
      .state('register',{
        url:'/register',
        controller:'registerController',
        templateUrl:'view/register.html'
      })
      .state('login',{
        url: '/login',
        controller:'loginController',
        templateUrl:'view/login.html'
      })
      .state('user',{
        url:'/me',
        controller:'userController',
        templateUrl: 'view/user.html'
      })
      .state('edituser',{
        url:'/me/edit',
        controller: 'userController',
        templateUrl: 'view/edituser.html'
      })

}]);
