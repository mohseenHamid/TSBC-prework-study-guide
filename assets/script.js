// Backend Code
let topics = ["HTML", "CSS", "Git", "JavaScript"];
let randomTopic = topics[Math.floor(Math.random() * topics.length)]; // Math.floor() rounds down & Math.random() generates a random value 0 <= value < 1

function selectTopic() {
	if (randomTopic === "HTML") {
		console.log("Let's study HTML!");
	} else if (randomTopic === "CSS") {
		console.log("Let's study CSS!");
	} else if (randomTopic === "Git") {
		console.log("Let's study Git!");
	} else if (randomTopic === "JavaScript") {
		console.log("Let's study JavaScript!");
	} else {
		console.log("Please try again!");
	}
}

function listTopics() {
	for (let x = 0; x < topics.length; x++) {
		console.log(topics[x]);
	}
}

// Output on Console
console.log("Here are the topics we learned through Prework:");
listTopics();

console.log("Which topic should we study first?");
selectTopic();
