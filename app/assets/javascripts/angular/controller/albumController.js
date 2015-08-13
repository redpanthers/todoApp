toDo = window.toDo || {}
toDo.controller('albumController',['$scope','$http','Auth',function($scope,$http,Auth){
  $scope.myAlbums = []
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

  //Create new album
  $scope.addAlbum = function(album){
    album.user_id = $scope.user.id
    $http.post('user/album/create',{album:album})
         .then(function(result){
            console.log(result)
            $scope.myAlbums.unshift(result.data.album)

         })
         .then(function(result){
            console.log(result)
         })
  }
}])