(function () {
	'use strict';

	var core = angular.module('app.core');

	core.config(toastrConfig);

	/* @ngInject */
	function toastrConfig(toastr) {
		toastr.options.timeOut = 4000;
		toastr.options.positionClass = 'toast-bottom-right';
	}

	var config = {
		appErrorPrefix: '[app1 Error] ',
		appTitle: 'app1'
	};

	core.value('config', config);

	core.config(configure);

	configure.$inject = ['$logProvider', 'routerHelperProvider', 'exceptionHandlerProvider'];

	/* @ngInject */
	function configure($logProvider, routerHelperProvider, exceptionHandlerProvider) {
		// noinspection Annotator
		if ($logProvider.debugEnabled) {
			// noinspection Annotator
			$logProvider.debugEnabled(true);
		}
		exceptionHandlerProvider.configure(config.appErrorPrefix);
		routerHelperProvider.configure({docTitle: config.appTitle + ': '});
	}

})();
