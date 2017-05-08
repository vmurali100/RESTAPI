app.service('contactService', function(Contact){
	var self= {
		'page':1,
		'isSaving':false,
		'hasMore':true,
		'isLoading':false,
		'selectedPerson':null,
		'persons':[],
		'search':null,
		'doSearch':function (search){
			self.hasMore=true;
			self.page=1;
			self.persons=[];
			self.search=search;
			self.loadContacts()
		},
		'loadContacts':function (){
			if(self.hasMore && !self.isLoading){
				self.isLoading=true;
				var params = {
					'page':self.page,
					'search':self.search

				}
				Contact.get(params,function (data){
					angular.forEach(data.results, function(person){
						self.persons.push(new Contact(person))
					});
					if(!data.next){
						self.hasMore=false
					}
					self.isLoading=false;
				})
			}
			

		},
		'loadMore':function(){
			if(self.hasMore && !self.isLoading){
				self.page+=1;
				self.loadContacts()
			}
		},
		'updateContact':function (person){
			self.isSaving=true;

			Contact.update(person).$promise.then(function (){
				self.isSaving=false;
			})

		},
		'removeContact':function (person){
			self.isDeleting=true;

			person.$remove(person).then(function (){
				self.isDeleting=false;
				var index=self.persons.indexOf(person)
				self.persons.splice(index,1)
				self.selectedPerson=null;
			})

		}


	}
	self.loadContacts()
	return self;
})