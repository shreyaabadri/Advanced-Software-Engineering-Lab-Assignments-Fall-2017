describe('myttos', function() {
	var scope;
	beforeEach(angular.mock.module('texttospeech'));
	beforeEach(angular.mock.inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller('myttos', {$scope: scope});
	}));

	it("Checks the speech conversion", function () {
		
	});
});