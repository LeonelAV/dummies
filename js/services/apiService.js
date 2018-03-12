angular.module('gatos')
  .factory('apiService', function($http){
    
    var token = '00D1r000000r55p!AR8AQHpr4Yb6ij8FtwroTITzk_TxzXRKSX_0mIEk7Wdn0hZGOaOXKtSyh2V87xgWJIIqEC_Rq9d8ujfAjnVnRbMOOhOmOT2U';
        
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
    
    
    return {
        getDummies: getDummies,
        getToken: getToken,
        getNationalities: getNationalities,
        getCreditCardTypes: getCreditCardTypes,
        creditCardsCounter: creditCardsCounter
    }
    
})

