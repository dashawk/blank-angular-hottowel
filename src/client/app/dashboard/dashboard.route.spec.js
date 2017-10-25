/* jshint -W117, -W030 */
describe('dashboard routes', function () {
	describe('state', function () {
		var view = 'app/dashboard/dashboard.html';

		beforeEach(function () {
			// noinspection Annotator
			module('app.dashboard', bard.fakeToastr);
			bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
		});

		beforeEach(function () {
			$templateCache.put(view, '');
		});

		bard.verifyNoOutstandingHttpRequests();

		it('should map state dashboard to url / ', function () {
			// noinspection Annotator
			expect($state.href('dashboard', {})).to.equal('/');
		});

		it('should map /dashboard route to dashboard View template', function () {
			// noinspection Annotator
			expect($state.get('dashboard').templateUrl).to.equal(view);
		});

		it('of dashboard should work with $state.go', function () {
			// noinspection Annotator
			$state.go('dashboard');
			$rootScope.$apply();
			// noinspection Annotator
			expect($state.is('dashboard'));
		});
	});
});
