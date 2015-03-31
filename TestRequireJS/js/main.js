require(['Models/User', 'Router' ], 
	function(User, Router){

	var users = [ 	new User('Vasya'),
					new User('Misha'),
					new User('Petia')];

	localStorage.users = JSON.stringify(users);

	//ListController.start();

	//AddController.start();
	Router.startRouting();

});
