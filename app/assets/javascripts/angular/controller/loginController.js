toDo = window.toDo || {}
toDo.controller('loginController',['$scope','$state','Auth',function($scope,$state,Auth){
  $scope.returnflag = false
  $scope.returnerrormsg = ""
  $scope.user = {}
  Auth.currentUser().then(function(user){
    $scope.user = user
    $state.go('todo')
  })
  $scope.login = function(){
    Auth.login($scope.user).then(function(user){
      $scope.returnflag = true // actually a success message
      $scope.returnerrormsg = false 
       $state.go('todo')
    },function(error){
      $scope.returnflag = true
      $scope.returnerrormsg = error.data.error
      $state.go('login')
    })
  }
}])
