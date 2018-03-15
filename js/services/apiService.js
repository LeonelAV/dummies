angular.module('gatos')
  .factory('apiService', function($http){
    
    var token = '00D1r000000r55p!AR8AQH6Wj3hyaOlykO7RwTDjTKHFt49gYZENr_dOKCLV9CZvUZrCQCRZHS504lWgF5QXD.lBeiH7cqZPxiYBG3n5CzK2OHoK';
        
    function getDummies() {
        var urlDummies = 'https://dummyleoapp-dev-ed.my.salesforce.com/services/apexrest/dummy_account_list';
        return $http.get(urlDummies, {
            headers: {
                'Content-type':'aplication/json',
                'Authorization': 'Bearer ' + token
            }
        }).then (response => response.data);
    }
    
    function getToken(){
        var tokenUrl = 'https://login.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG95NPsF2gwOiOVVTO0aMqTHEnkvEdrqYpzLjPtN00nBL_30RQyNU8rJMbRsj3uNWSL1x5n_Q7OLefkSt4B&client_secret=9167155883873927409&username={{username}}&password={{password}}';
        return $http.post(tokenUrl).then(response => response.data);
        console.log(response.data)
    }
    
    function getNationalities() {
        
        var urlNations = 'https://dummyleoapp-dev-ed.my.salesforce.com/services/apexrest/nationalityFilter';
        return $http.get(urlNations, {
            headers: {
                'Content-type':'aplication/json',
                'Authorization':'Bearer ' + token
            }
        }).then (response => response.data);
    }
    
     function getCreditCardTypes() {
        var urlCards= 'https://dummyleoapp-dev-ed.my.salesforce.com/services/apexrest/creditCardType';
        return $http.get(urlCards, {
            headers: {
                'Content-type':'aplication/json',
                'Authorization':'Bearer ' + token
            }
        }).then (response => response.data);
    }
    
   function getDepartments() {
       var urlDep = 'https://dummyleoapp-dev-ed.my.salesforce.com/services/data/v20.0/query/?q=SELECT+Department__c+from+Dummy_Accounts__c+group+by+Department__c'
       return $http.get(urlDep, {
           headers: {
               'Content-type': 'aplication/json',
               'Authorization': 'Bearer ' + token
           }
       }).then(response => response.data.records);
   }
    
    
     function creditCardsCounter(card) {
        console.log(card)
        var urlCardsCounter = 'https://dummyleoapp-dev-ed.my.salesforce.com/services/apexrest/creditCardCounter?card=' + card;
        return $http.get(urlCardsCounter, {
            headers: {
                'Content-type': 'aplication/json',
                'Authorization': 'Bearer ' + token
            }
        }).then(response => response.data)
    }
    
    
    function createAccount(data) {
        var url = 'https://dummyleoapp-dev-ed.my.salesforce.com/services/data/v20.0/sobjects/Dummy_Accounts__c/'

      console.log('service '+ data)
        return $http.post(url, JSON.stringify(data), {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(function(response){
            //Success
            return response.data;
            console.log('Sucess' + response);
        },function(response){
            //Error
            console.log("Error");
        }
        )}
   
    function deleteDummy(id) {
        console.log(id);
        var url = 'https://dummyleoapp-dev-ed.my.salesforce.com/services/data/v20.0/sobjects/Dummy_Accounts__c/' + id;
        return $http.delete(url, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => response.data)
    }
    

    return {
        getDummies: getDummies,
        getToken: getToken,
        getNationalities: getNationalities,
        getCreditCardTypes: getCreditCardTypes,
        creditCardsCounter: creditCardsCounter,
        createAccount: createAccount, 
        getDepartments: getDepartments,
        deleteDummy: deleteDummy
    }
    
})

