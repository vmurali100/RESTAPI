app.controller('contactsListController', ['$scope','contactService', function($scope,contactService){
	$scope.contacts=contactService;

}])