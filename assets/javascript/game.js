$(document).ready(function(){
	var attackPower = 8
	var characters = {
		Obi: {name: "Obi", points: 120, counter: 25},
		Maul: {name: "Maul", points: 180, counter: 15},
		Sidious: {name: "Sidious", points: 150, counter: 20 },
		Luke: {name: "Luke", points: 100, counter: 30 }
	};

	$(".char").each(function(index, div){
		var otherDiv = $(div);
 		var value = $(div).attr('value');
 		otherDiv.html("<h3>" + characters[value].name + "</h3>" +
 									"<p>points: " + characters[value].points + "</p>");
	})

	$(".char").click(function() {

		if( $("#enemies").is(":empty")){
			var good1 = $(this).addClass("good1");
			$(this).removeClass("gamebegins");

			if ($(".char").not("gamebegins")) {
				var enemies = $(".gamebegins").addClass("enemy");
				$("#enemies").append(enemies);
				$(".enemy").click(function(){

					if ( $("#defender").is(":empty") ){
						$(this).removeClass("enemy");
						$(this).removeClass("gamebegins")
						$(this).addClass("defender");

						var defender = $(this).addClass("defender");
						$("#defender").append(defender);
					}
				});

			}
		}
	});

	$("button").click(function(){
			if ($("#defender").is(":empty") ){
			alert("Please choose a defender");
			}
			else{
				$(".yourAttack").html("<p>You attacked for " + attackPower + " damage</p>");
				$(".defender").each(function(index, div){
					var value = $(div).attr('value')
					var counter = characters[value].counter;
					$(".enemyAttack").html("<p>" + characters[value].name + " attacked you for " + characters[value].counter + " damage</p>");

					characters[value].points -= attackPower;

					var otherDiv  = $(div);
 					otherDiv.html("<h3>" + characters[value].name + "</h3>" +
												"<p>points: " + characters[value].points + "</p>");

 					if (characters[value].points <= 0){
 						$(".defender").remove();
 						$(".enemyAttack").empty();
 						$(".yourAttack").html("<p>You did it, you can choose to fight another enemy.");
 					}
					$(".good1").each(function(index, div) {
						var value = $(div).attr('value');
						characters[value].points -= counter;
						var otherDiv  = $(div);
	 					otherDiv.html("<h3>" + characters[value].name + "</h3>" +
	 					"<p>points: " + characters[value].points + "</p>");
					})

					if (characters[value].points <= 0){
								alert("You Won!!!! Game Over!!!");
					}

				});
			}

		if ($(".gamebegins").length <= 0){
			$(".enemyAttack").empty();
			$(".yourAttack").html("Congrats you win!");
		}
	});

});
