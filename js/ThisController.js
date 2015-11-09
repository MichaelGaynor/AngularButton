let ThisController = function($scope) {
  
  $scope.number = [];

  $scope.clicked = function(click) {
    let x = 1;
    $scope.number.push(x);
    $scope.coolText = $scope.number.length + (
    $scope.number.length === 1 ? " like" : " likes");
  };

};

ThisController.$inject = ['$scope'];

export default ThisController;