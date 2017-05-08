var app=angular.module('app', ['ngResource','infinite-scroll','angularSpinner','jcs-autoValidate','angular-ladda','mgcrea.ngStrap'])

app.config(['$httpProvider','$resourceProvider','laddaProvider',function($httpProvider,$resourceProvider,laddaProvider) {
	$httpProvider.defaults.headers.common['Authorization']='Token dcecd9338164d7f63e9fc07f24b0a56dcda196b7'
	$resourceProvider.defaults.stripTrailingSlashes=false;
	laddaProvider.setOption({
		style:'expand-right'
	})
}])

app.factory('Contact', ['$resource', function($resource){
	return $resource ('https://api.codecraft.tv/samples/v1/contact/:id/',{id:'@id'},{
		update:{
			method:'PUT'
		}
	})
}])