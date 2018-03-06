angular.module('gatos')
  .controller('homeController', function($scope, apiService){
    $scope.title ='Dummies List';
    
    $scope.getDummies = function() {
      apiService.getDummies().then( function(response){
        $scope.Dummies = response;
        console.log(response); 
    })
    }
    
    $scope.sortReverse = false;
    
    $scope.getToken = function(){
        apiService.getToken().then(function(response){
            console.log(response)
        })
    }
    
      $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    
      $scope.data = [300, 500, 100];
    
})

