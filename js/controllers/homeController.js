angular.module('gatos')
  .controller('homeController', function($scope, $rootScope, $location, apiService, toastr){
    $scope.title ='Dummies List';
    
    $scope.getDummies = function() {
      apiService.getDummies().then( function(response){
        $rootScope.Dummies = response;
          console.log(response[0].Id)
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
        $location.path() === '/list' ? $location.path('/list') : $location.path('/graphInfo')
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
          $scope.totalOfNations = response.length;
          $scope.nations = response;
          console.log(response)
          console.log($scope.totalOfNations);
      })
    })();
    
    
    ($scope.getDepartments = function() {
        apiService.getDepartments().then( function(response) {
            $scope.filteredDepartList = [];
            response.map( department => $scope.filteredDepartList.push(department.Department__c));
            console.log($scope.filteredDepartList)

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
    
    
    $scope.createAccount = function() {
        console.log('Button was clicked');
        var url= 'https://dummyleoapp-dev-ed.my.salesforce.com/services/data/v20.0/sobjects/Dummy_Accounts__c/';
        
        
        
         var data = {"Name": $scope.firstName + ' ' + $scope.lastName,
                    "First_Name__c": $scope.firstName,
                    "Last_Name__c": $scope.lastName,
                    "Gender__c": $scope.gender,
                    "ID__c": $scope.id,
                    "Nationality__c": $scope.nationality,
                    "Company_Name__c": $scope.companyName,
                    "Department__c": $scope.department,
                    "Credit_Card_Type__c": $scope.creditcard,
                    "Email__c": $scope.email
                    };
        
          console.log(data)
         
       apiService.createAccount(data) 
           .then( msg => {
             console.log(data);
             toastr.success('Created a new Dummy called ' + $scope.firstName)
       });
        $scope.getDummies();
        console.log('Controller '+ $scope.firstName)
}
        
    $scope.deleteDummy = function(id, firstName, lastName){
        console.log(id);
        console.log(firstName);
        apiService.deleteDummy(id)
          .then(msg => {
            toastr.error(firstName + ' ' + lastName +  ' was Removed', msg)
        })
        $scope.getDummies();
    }
    

    
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

