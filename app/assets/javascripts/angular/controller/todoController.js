toDo = window.toDo || {}
toDo.controller('todoController',['$scope','$location','$http','$state','Auth',function($scope,$location,$http,$state,Auth){
  $scope.isCollapsed = false;
  $scope.filteroption = {
    priority:"",
    title: ""
  }
  $scope.filterit = function(text){
    $scope.filteroption.priority = text
  }
  Auth.currentUser().then(function(user){
    $scope.user = user
  },function(){
    $state.go('login')
  })
  $scope.todos = {}
  $http.get('/home/get_todo')
    .then(function(success){
      $scope.todos = success.data.todo
    })

  $scope.formData = {}
  //Options for select box
  $scope.options = [{value:3,name:'Low'},{value:2,name:'Medium'},{value:1,name:'High'}]

  //Submit form
  $scope.submit_form = function(){
      $http.post('/home/store_todo',$scope.formData)
        .then(function(success){ // success responce
          $scope.todos = success.data.todo
          $scope.formData = {}
        },function(error){ // error response

        })
    //send ajax post
  }
}])
