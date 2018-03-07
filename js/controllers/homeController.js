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
          
          $rootScope.department = {
            R_Dev: 0,
            Legal:0,
            Marketing:0,
            HR:0,
            Train:0,
            PMt:0,
            Sppt:0,
            BD:0,
            Account:0,
            Serv:0,
            Eng:0
          }
          
          response.map(function(dummy) {
              if (dummy.Department__c === 'Research and Development') {
                  return  $rootScope.department.R_Dev += 1;
              }
          })
          console.log('There are a ' + $rootScope.department. R_Dev + ' dummies from Research and Development department ' )
          
          
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
    
    
//    $scope.getToken = function(){
//        apiService.getToken().then(function(response){
//            console.log(response)
//        })
//    }
    
    
    
     
    
})

