require(['Models/User', 'Controllers/ListController', 'Controllers/AddController' ], 
	function(User, ListController,AddController){

	var users = [ 	new User('Vasya'),
					new User('Misha'),
					new User('Petia')];

	for (var i = 0, len = users.length; i < len; i++) {
		console.log(users[i].name);
	}

	localStorage.users = JSON.stringify(users);

	//ListController.start();

	AddController.start();

});
