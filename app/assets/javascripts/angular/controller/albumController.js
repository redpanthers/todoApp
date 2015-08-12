toDo = window.toDo || {}
toDo.controller('albumController',['$scope','$http','Auth',function($scope,$http,Auth){
  $scope.user = {}
  Auth.currentUser().then(function(user){
    $scope.user = user
  },function(){
    $state.go('login')
  })

  $scope.userAlbums = []
  $http.get('user/'+$scope.user.id+'/album')
    .then(function(data){
      $scope.userAlbums = data.data.userAlbums
    })
    .then(function(){

    })
}])