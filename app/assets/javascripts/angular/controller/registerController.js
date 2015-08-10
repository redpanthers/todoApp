toDo = window.toDo || {}
toDo.controller('registerController',['$scope','Auth','$state',function($scope,Auth,$state){
  $scope.$on('devise:new-registration', function(event, user) {
    $scope.user = user
  });
  $scope.user = {}
  $scope.register = function(){
    Auth.register($scope.user).then(function(){
      $state.go('todo')
    })
  }
}])
