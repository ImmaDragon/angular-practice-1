if (Meteor.isClient) {
  angular.module('simple-todos',['angular-meteor']);
  angular.module('simple-todos').controller('TodosListCtrl', ['$scope',
    funciton ($scope){
      $scope.tasks= [
        { text: 'This is task1'},
        { text: 'This is task2'},
        { text: 'This is task3'}
      ];

    }]);


}