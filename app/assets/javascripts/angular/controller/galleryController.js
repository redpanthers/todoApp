/**
 * Created by sibin on 11/8/15.
 */
toDo = window.toDo || {}
toDo.controller('galleryController',['$scope','$http','Auth','Upload',function($scope,$http,Auth,Upload){
  $scope.user = {}
  Auth.currentUser().then(function(user){
    $scope.user = user
  },function(){
    $state.go('login')
  })

  $scope.myImages = []
  $http.get('user/gallery')
       .then(function(data){
          console.log(data)
          $scope.myImages=  data.data.gallery
        })
    .then(function(data){
    })
  console.log($scope.ima)
  $scope.images = {}
  $scope.$watch('images',function(images){
    if(images!=""){
      $scope.upload(images)
    }
  })
  $scope.updateDetails = function(image){
    $http.post('user/gallery/update_details',image)
      .then(function(){

      })
      .then(function(){

      })
  }
  $scope.imageDelete = function(image,index){
    $http.post('user/gallery/'+image.id+'/delete',{image:image})
      .then(function(data){

      })
      .then(function(data){

      })
    $scope.myImages.splice(index,1)
  }
  $scope.upload = function(images){
    if(images && images.length > 0){
      $.each(images,function(index,image){
        Upload.upload({
          url: 'user/gallery/create',
          file: image
        }).progress(function(){

        }).success(function(data){
          $scope.myImages = $scope.myImages.slice().reverse()
          $scope.myImages.push(data.image)
          $scope.myImages = $scope.myImages.slice().reverse()

        }).error(function(){

        })

      })
    }
  }


  //For album releated contents
  $scope.myAlbums = []
  console.log($scope.user)
  if(angular.isObject($scope.user)){
    $http.get('user/'+$scope.user.id+'/album')
      .then(function(data){
        $scope.myAlbums = data.data.userAlbums
        console.log(data)
      })
      .then(function(){

      })
  }


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

  $scope.droped = function(item){
    console.log(item)
  }
}])
