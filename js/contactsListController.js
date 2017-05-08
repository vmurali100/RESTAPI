app.controller('contactsListController', ['$scope','contactService','$modal', function($scope,contactService,$modal){
	$scope.search="";
	$scope.contacts=contactService;
	$scope.loadMore=function (){
		console.log("Load Nore Is Called")
		$scope.contacts.loadMore()
	}
	$scope.$watch('search',function (newVal,oldVal){
		console.log(newVal)
		$scope.contacts.doSearch(newVal)
	})

	$scope.showCreateModal=function (){
		$scope.createModal=$modal({
			scope:$scope,
			template:'templates/modal-create-tpl.html',
			show:true
		})
	}
}])