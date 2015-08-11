toDo = window.toDo || {}
toDo.controller('userController',['$scope','$state','Auth','$http','Upload',function($scope,$state,Auth,$http,Upload){

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


  //Upload user image
  $scope.$watch('files',function(files){
    if($scope.files !=""){
      $scope.upload($scope.files)
    }

  })
  $scope.isStarted = function(){
    return false
  }
  $scope.percentage = 0
  $scope.upload = function(file){
    if(file && file.length > 0){
      fileobj = file[0]
      Upload.upload({
        url: 'user/upload_profile',
        file: fileobj
      }).progress(function(evt){
        $scope.isStarted = function(){
          return true
        }
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        $scope.percentage = progressPercentage
      }).success(function(data){
       $scope.user = data.user
       $scope.file = data.user.userimage.url
        $scope.isStarted = function(){
          return false
        }
        $scope.percentage = 0
      }).error(function(data){
        console.log(data)
      })
    }

  }

}]);
