(function() {
   angular.module('app')
       .component('friends', {
           controller: controller,
           templateUrl: '/friends/friends.view.html',
           bindings: {

           }
       })

controller.$inject = ['friends_service', '$http']

   function controller(friends_service, $http) {
       const vm = this;
       vm.$onInit = function(){
         console.log('RUNNING')
         friends_service.getFriends().then(friends=>{
           vm.friends = friends.data;
           console.log(vm.friends);
         })

       }
     }
})();
