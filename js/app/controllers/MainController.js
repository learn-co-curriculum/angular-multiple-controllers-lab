function MainController() {
    $scope.name = 'Bill Gates';
}

angular
    .module('app')
    .controller('MainController', MainController);