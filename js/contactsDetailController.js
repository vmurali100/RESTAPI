app.controller('contactsDetailController', ['$scope','contactService', function($scope,contactService){
	$scope.contacts=contactService;

	$scope.save=function(){
		$scope.contacts.updateContact($scope.contacts.selectedPerson)
	}
	$scope.remove=function (){
		$scope.contacts.removeContact($scope.contacts.selectedPerson)
	}
}])