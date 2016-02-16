angular.module('SecretSanta.list', [])

.controller('ListController', function($scope){
  $scope.list = [];
  $scope.randomlist = {};

  $scope.addtolist = function() {
    $scope.list.push($scope.newName);
    $scope.newName = '';
    console.log("add to list is working?")
  }

  $scope.removefromlist = function(i) {
    $scope.list.splice(i, 1);
  }

  $scope.shuffle = function(list) {
    var shuffle = function(array) {
    var shuffled = array.slice();
    for ( var i = 0; i < shuffled.length; i++) {
      var randomNum = Math.floor(Math.random()* shuffled.length);
      var temp = shuffled[randomNum];
      shuffled[randomNum] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled;
  };

    var shuffledList = shuffle(list);
    for (var i = 0; i < list.length; i++) {
      $scope.randomlist[list[i]] = shuffledList[i];
    }
  }

});

// .controller('RandomController', function($scope, list){
//   $scope.randomlist = {};

//   $scope.shuffle = function(list) {
//     var shuffledList = _.shuffle(list);
//     for (var i = 0; i < list.length; i++) {
//       $scope.randomlist[list] = shuffledList[i];
//     }
//   }
// });

