// Global variables

$(document).ready(function() {


// Character array

	var characters = {

	'luke': {
		name: 'luke',
		health: 120,
		attack: 15,
		counterAttack: 20,
	},

	'darth': {
		name: 'darth',
		health: 140,
		attack: 15,
		counterAttack: 20,
	},

	'sidious': {
		name: 'sidious',
		health: 150,
		attack: 10,
		counterAttack: 15,
	},

	'maul': {
		name: 'maul',
		health: 100,
		attack: 8,
		counterAttack: 15,
	}
	};

// Global variables again

	var playerChosen;
	var enemyChosen;
	var turn = 1;
	var lose = false;




// Select player

	$('div[data-name="Luke"]').on('click', function() {
		if (turn == 1 || turn == 2) {
			$('div[data-name="Luke"]').appendTo('#arena-section');
			playerChosen = $('div[data-name="Luke"]');
			turn = 2;
		};
	})


	$('div[data-name="Darth"]').on('click', function() {
		if (turn == 1 || turn == 2) {
			$('div[data-name="Darth"]').appendTo('#arena-section');
			playerChosen = $('div[data-name="Darth"]');
			turn = 2;
		};
	})


	$('div[data-name="Sidious"]').on('click', function() {
		if (turn == 1 || turn == 2) {
			$('div[data-name="Sidious"]').appendTo('#arena-section');
			playerChosen = $('div[data-name="Sidious"]');
			turn = 2;
		};
	})


	$('div[data-name="Maul"]').on('click', function() {
		if (turn == 1 || turn == 2) {
			$('div[data-name="Maul"]').appendTo('#arena-section');
			playerChosen = $('div[data-name="Maul"]');
			turn = 2;
		};
	})


// Select combatant

	$('div[data-name="Luke"]').on('click', function() {
		if (turn == 2 || turn == 3) {
			$('div[data-name="Luke"]').appendTo("#arena-section");
			enemyChosen = $('div[data-name="Luke"]');
			turn = 3;
		};
	})


	$('div[data-name="Darth"]').on('click', function() {
		if (turn == 2 || turn == 3) {
			$('div[data-name="Darth"]').appendTo('#arena-section');
			enemyChosen = $('div[data-name="Darth"]');
			turn = 3;
		};
	})


	$('div[data-name="Sidious"]').on('click', function() {
		if (turn == 2 || turn == 3) {
			$('div[data-name="Sidious"]').appendTo('#arena-section');
			enemyChosen = $('div[data-name="Sidious"]');
			turn = 3;
		};
	})

	$('div[data-name="Maul"]').on('click', function() {
		if (turn == 2 || turn == 3) {
			$('div[data-name="Maul"]').appendTo('#arena-section');
			enemyChosen = $('div[data-name="Maul"]');
			turn = 3;
		};
	})


// Message display

	var charlie = function (message) {
		var gameMessageStage = $('#gameMessage');
		var newMessage = $("<div>").innerHTML(message);
		gameMessageStage.append(newMessage);
	}


// Attack function
function attack() {
	if (enemyChosen.health > 0) {
		enemyChosen.health = enemyChosen.health - playerChosen.attack;

		if (enemyChosen.name == "luke") {
			luke = enemyChosen;
			document.getElementById("luke-health").innerHTML = luke.health;

		} else if (enemyChosen.name == "darth") {
			darth = enemyChosen;
			document.getElementById("darth-health").innerHTML = darth.health;

		} else if (enemyChosen.name == "sidious") {
			sidious = enemyChosen;
			document.getElementById("sidious-health").innerHTML = sidious.health;

		} else if (enemyChosen.name == "maul") {
			maul = enemyChosen;
			document.getElementById("maul-health").innerHTML = maul.health;
		}
		}
		};


// Counter Attack function
function counterAttk() {
	playerChosen.health = playerChosen.health - enemyChosen.counterAttack;

	if (playerChosen.name == "luke") {
		document.getElementById("luke-health").innerHTML = playerChosen.health;

	} else if (playerChosen.name == "darth") {
		document.getElementById("darth-health").innerHTML = playerChosen.health;

	} else if (playerChosen.name == "sidious") {
		document.getElementById("sidious-health").innerHTML = playerChosen.health;
	} else if (playerChosen == "maul") {
		document.getElementById("maul-health").innerHTML = playerChosen.health;
	};
}


// Attack button

$('#attack-button').on('click', function() {
	if (turn == 3 || turn == 5 || turn == 7) {
		attack();

		if (enemyChosen <= 0) {
			$('div[data-name=""]').empty().appendTo('div[data-name=""]');
			turn++;

		} else {
			counterAttk();
			if (playerChosen.health <= 0) {
				lose = true;
			};
		}

	};
})

console.log('#attack-button');



// Global variable end bracket

})