const btnRandom = document.querySelector('.btnRandom')

const dadJoke = [
    "Why do fathers take an extra pair of socks when they go golfing?",
    "What do a tick and the Eiffel Tower have in common?",
    "How do you follow Will Smith in the snow?",
    "What did the janitor say when he jumped out of the closet?",
    "What did the ocean say to the beach?",
    "Why do seagulls fly over the ocean?",
    "What did Baby Corn say to Mama Corn?",
    "What do you call a poor Santa Claus?",
    "Where do boats go when they're sick?",
];


const dadJokeAnswer = [
    "In case they get a hole in one!", 
    "They're both Paris sites.", 
    "You follow the fresh prints.", 
    "Supplies!",
    "Nothing, it just waved.",
    "Because if they flew over the bay, we'd call them bagels.",
    "Where's Pop Corn?",
    "St. Nickel-less.",
    "To the boat doc."
 ];

document.querySelector("#btnRandom").onclick = function() {
    document.getElementById("joke-Answer").innerHTML = "";
    const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min)
    const jokeNumber = randomNumber(0, dadJoke.length)
    console.log(dadJoke[jokeNumber])
    document.getElementById("joke-Question").innerHTML = dadJoke[jokeNumber];
    function jokeAnswer() {
    console.log(dadJokeAnswer[jokeNumber])
    document.getElementById("joke-Answer").innerHTML = dadJokeAnswer[jokeNumber];
    }
    setTimeout(jokeAnswer, 4000)
    
    let counter = 4;
    const i = setInterval(function(){
    console.log(counter);
    counter--;
    document.getElementById("countdown-timer").innerHTML = counter;
    if(counter === 0) {
        clearInterval(i);
        document.getElementById("countdown-timer").innerHTML = "";
    }
}, 1000);
}
