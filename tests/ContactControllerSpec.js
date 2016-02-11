describe('ContactController', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));


	it('should have the properties name, email and phone', function () {
		var $scope = {};

		$controller('ContactController as vm', { $scope: $scope });

		expect($scope.vm.name).not.toBe(undefined);
		expect($scope.vm.email).not.toBe(undefined);
		expect($scope.vm.phone).not.toBe(undefined);
	});

	describe('changeName function', function () {
		it('should have a function to change the name property', function () {
			var $scope = {};

			$controller('ContactController as vm', { $scope: $scope });

			expect($scope.vm.changeName).not.toBe(undefined);
		});

		it('change the name to something else when called', function () {
			var $scope = {};

			$controller('ContactController as vm', { $scope: $scope });

			var originalName = $scope.vm.name;

			$scope.vm.changeName();

			expect($scope.vm.name).not.toBe(originalName);
		});
	});
});
