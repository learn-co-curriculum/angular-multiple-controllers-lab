describe('StaffController', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));


	it('should have the properties name, email and phone', function () {
		var $scope = {};

		$controller('StaffController as vm', { $scope: $scope });

		expect($scope.vm.name).not.toBe(undefined);
		expect($scope.vm.email).not.toBe(undefined);
		expect($scope.vm.phone).not.toBe(undefined);
	});
});
