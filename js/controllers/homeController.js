angular.module('gatos')
  .controller('homeController', function($scope, apiService){
    $scope.title ='Dummies List';
    
    $scope.getDummies = function() {
      apiService.getDummies().then( function(response){
        $scope.Dummies = response;
          console.log(response); 
          
          $scope.female = 0;
          $scope.male = 0;
          response.map(dummy => dummy.Gender__c === 'Female' ? $scope.female += 1 : $scope.male +=1)
          console.log($scope.female);
          console.log($scope.male);
          $scope.labels = ["Female", "Male"];
          $scope.data = [$scope.female, $scope.male];
    })
    }
    
    $scope.sortReverse = false;
    
    $scope.getToken = function(){
        apiService.getToken().then(function(response){
            console.log(response)
        })
    }
    
     
    
})

