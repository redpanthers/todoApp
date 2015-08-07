toDo = window.toDo || {}
toDo.controller('todoController',['$scope','$location','$http',function($scope,$location,$http){
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
    var getFormData = $scope.formData
    $scope.formData = {}
    //send ajax post
    $http.post('/home/store_todo',getFormData)
      .then(function(success){ // success responce
        $scope.todos = success.data.todo
      },function(error){ // error response

      })
  }
}])