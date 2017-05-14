/*******************************************************************************
*******************************************************************************
****************     Sam Cannon Week 5 Traivia Homework    ********************
*******************************************************************************
*******************************************************************************/


var questionList = {

	q1: {question: "Which of these known stars has the largest diameter", 
		option: {r1: "VY Canis Majoris", r2: "Rigel", r3: "UY Scuti", r4: "", answer: "Betelgeuse"} },
	q2: {question: "Which of these galaxies are our closest neighbor?",
		option: {r1: "Andromeda", r2: "Antila Dwarf", r3: "Large Magellanic Cloud", r4: "Canis Major Dwarf", answer: "Canis Major Dwarf"} },
	q3: {question: "What is the name of our area of the Laniakea Supercluster?",
		option: {r1: "Coma Supercluster", r2: "Virgo Supercluster", r3: "Perseus-Pices Supercluster", r4: "Hydra Supercluster", answer: "Virgo Supercluster"} },
	q4: {question: "How long does it take light to travel from the Sun to Pluto?", 
		option: {r1: "5.5 Hours", r2: "79.3 Minutes", r3: "4.1 Hours", r4: "12.6 Minutes", answer: "5.5 Hours"} },
	q5: {question: "Approximately how long would it take you to drive roughly 93 million miles non-stop from the Earth to the Sun at a constant speed of 75mph?", 
		option: {r1: "Approx. 2000.85 Years", r2: "Approx. 27.29 Years", r3: "Approx. 141.49 Years", r4: "Approx. 15 Minutes", answer: "Approx. 141.49 Years"} },

};

$().ready(function() {

	$("#start").click(function() {

		$("#welcome").css("display", "none");

		$("#triviaArea").css("display", "block");

	});



	
});

function game() {

	var qNum = "1";

	for(var i = 0; i<3; i++) {

	};

};


console.log(questionList.q5.option.answer);