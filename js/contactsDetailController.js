app.controller('contactsDetailController', ['$scope','contactService', function($scope,contactService){
	$scope.contacts=contactService;

}])