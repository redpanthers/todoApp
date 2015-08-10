toDo = window.toDo || {}
toDo.controller('userController',['$scope','$state','Auth','$http',function($scope,$state,Auth,$http){
  $scope.editreturnmsg = false
  $scope.signedIn  = Auth.isAuthenticated;
  $scope.logout    = Auth.logout;

  Auth.currentUser().then(function(user){
    $scope.user = user
    $scope.userData = user
  })

  $scope.$on('devise:new-registration', function (e, user){
    $scope.user = user;
  });

  $scope.$on('devise:login', function (e, user){
    $scope.user = user;
    $scope.userData = user
  });

  $scope.$on('devise:logout', function (e, user){
    $scope.user = {};
  });

  $scope.login = function(){
    Auth.login($scope.user).then(function(){
      $state.go('todo')
    })
  }

  $scope.edit = function(){
    $state.go('edituser')
  }

  $scope.userData = {}
  $scope.edituser = function(){
    $http.post('user/'+$scope.user.id+'/update',$scope.userData)
      .then(function(data){ // Responce from server, suceess data
        console.log(data.data.status)
        if(data.data.status =="success"){
          $state.go('user')
        }else{
          $scope.editreturnmsg = data.data.message
        }
      })
      .then(function(){ // Responce from server, failed data

      })
  }

}]);
