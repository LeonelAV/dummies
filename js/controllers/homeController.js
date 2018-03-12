angular.module('gatos')
  .controller('homeController', function($scope, $rootScope, $location, apiService){
    $scope.title ='Dummies List';
    
    $scope.getDummies = function() {
      apiService.getDummies().then( function(response){
        $rootScope.Dummies = response;
          console.log(response); 
           
          $rootScope.female = 0;
          $rootScope.male = 0;
          response.map(dummy => dummy.Gender__c === 'Female' ? $rootScope.female += 1 : $rootScope.male +=1);
          console.log($rootScope.female);
          console.log($rootScope.male);
          $rootScope.labels = ["Female", "Male"];
          $rootScope.data = [$rootScope.female, $rootScope.male];
          
          
          $rootScope.rankingLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
          $rootScope.rankingSeries = ['Series A', 'Series B'];
          $rootScope.rankingData = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
          ];
          $rootScope.onClick = function (points, evt) {
            console.log(points, evt);
          };
          $rootScope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2'}];
          $rootScope.options = {
            scales: {
              yAxes: [
                {
                  id: 'y-axis-1',
                  type: 'linear',
                  display: true,
                  position: 'left'
                },
                {
                  id: 'y-axis-2',
                  type: 'linear',
                  display: true,
                  position: 'right'
                }
              ]
            }
          };   
    })
        $location.path('/graphInfo');
    }
    
    
    $scope.getList = function() {
      $location.path('/list');
    }
    
    
    $rootScope.sortReverse = false;
    
    
    $scope.goBack = function(){
        $location.path('/graphInfo');
    };
    
    
    ($scope.getNationalities = function() {
      apiService.getNationalities().then( function(response) {
          $scope.totalOfNations = response.length
          console.log(response)
          console.log($scope.totalOfNations);
      })
    })();
    
    
    
//    credit card controller
    ($scope.getCreditCardTypes = function() {
        
      apiService.getCreditCardTypes().then( function(response) {
      $scope.creditCardTypes = response;
      console.log(response);
         
          
      $scope.creditCounterTypes = $scope.creditCardTypes.map(data => data.split(":").splice(0,1).join());
          
      $scope.creditCardNumbers = $scope.creditCardTypes.map(data => Number(data.split(":").splice(1,1)));
          
      console.log( $scope.creditCounterTypes);
      console.log( $scope.creditCardNumbers);
          
     });
    })();
    
    
        

//    $scope.getToken = function(){
//        apiService.getToken().then(function(response){
//            console.log(response)
//        })
//    }
    
    
//    $scope.getCreditCardsCount = function(arrayCards) {
//
//        console.log(arrayCards);
//        apiService.creditCardsCounter(arrayCards).then ( function(response) {
//            $rootScope.counterArray = response;
//            console.log(response);
//            
//        })
//    }
    
     
    
})

