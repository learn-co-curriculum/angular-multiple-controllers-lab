function StaffController() {
	var vm = this;

	vm.name = 'Bill Gates';
	vm.email = 'bill@microsoft.com';
	vm.phone = '0123456789';
}

angular
	.module('app')
	.controller('StaffController', StaffController);