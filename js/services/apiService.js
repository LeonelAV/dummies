angular.module('gatos')
  .factory('apiService', function($http){
    
    function getDummies() {
        var urlDummies = 'https://dummyleoapp-dev-ed.my.salesforce.com/services/apexrest/dummy_account_list';
        return $http.get(urlDummies, {
            headers: {
                'Content-type':'aplication/json',
                'Authorization': 'Bearer 00D1r000000r55p!AR8AQLCkwdPr.K998jo9kPV07SXnn8m7pO8IbUrjABC4k5O53zgJsWOYmRtJoL4iEyvCv_kZumYIxdnT1N_n84i7v4EeTW9f'
            }
        }).then (response => response.data);
    }
    
    function getToken(){
        var tokenUrl = 'https://login.salesforce.com/services/oauth2/token?grant_type=password&client_id=3MVG95NPsF2gwOiOVVTO0aMqTHEnkvEdrqYpzLjPtN00nBL_30RQyNU8rJMbRsj3uNWSL1x5n_Q7OLefkSt4B&client_secret=9167155883873927409&username={{username}}&password={{password}}';
        return $http.post(tokenUrl).then(response => response.data);
        console.log(response.data)
    }
    
    
    
    return {
        getDummies: getDummies,
        getToken: getToken
    }
    
})

