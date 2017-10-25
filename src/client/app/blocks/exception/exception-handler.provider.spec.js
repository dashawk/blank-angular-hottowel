/* jshint -W117, -W030 */
describe('blocks.exception', function () {
	var exceptionHandlerProvider;
	var mocks = {
		errorMessage: 'fake error',
		prefix: '[TEST]: '
	};

	beforeEach(function () {
		bard.appModule('blocks.exception', function (_exceptionHandlerProvider_) {
			exceptionHandlerProvider = _exceptionHandlerProvider_;
		});
		bard.inject('$rootScope');
	});

	bard.verifyNoOutstandingHttpRequests();

	describe('exceptionHandlerProvider', function () {
		// noinspection Annotator
		it('should have a dummy test', inject(function () {
			expect(true).to.equal(true);
		}));

		// noinspection Annotator
		it('should have exceptionHandlerProvider defined', inject(function () {
			// noinspection Annotator
			expect(exceptionHandlerProvider).to.be.defined;
		}));

		// noinspection Annotator
		it('should have configuration', inject(function () {
			// noinspection Annotator
			expect(exceptionHandlerProvider.config).to.be.defined;
		}));

		// noinspection Annotator
		it('should have configuration', inject(function () {
			// noinspection Annotator
			expect(exceptionHandlerProvider.configure).to.be.defined;
		}));

		describe('with appErrorPrefix', function () {
			beforeEach(function () {
				exceptionHandlerProvider.configure(mocks.prefix);
			});

			// noinspection Annotator
			it('should have appErrorPrefix defined', inject(function () {
				// noinspection Annotator
				expect(exceptionHandlerProvider.$get().config.appErrorPrefix).to.be.defined;
			}));

			// noinspection Annotator
			it('should have appErrorPrefix set properly', inject(function () {
				expect(exceptionHandlerProvider.$get().config.appErrorPrefix)
					.to.equal(mocks.prefix);
			}));

			// noinspection Annotator
			it('should throw an error when forced', inject(function () {
				expect(functionThatWillThrow).to.throw();
			}));

			it('manual error is handled by decorator', function () {
				exceptionHandlerProvider.configure(mocks.prefix);
				try {
					$rootScope.$apply(functionThatWillThrow);
				}
				catch (ex) {
					expect(ex.message).to.equal(mocks.prefix + mocks.errorMessage);
				}
			});
		});
	});

	function functionThatWillThrow() {
		throw new Error(mocks.errorMessage);
	}
});
