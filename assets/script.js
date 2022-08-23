var topics = ['HTML', 'CSS', 'JavaScript', 'Git'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

console.log("Here are the topics we learned throughout prework: ")
ListTopics();
console.log("Which topic should we study first: ");
SelectTopics();

function SelectTopics(){

    if (randomTopic === 'HTML') {

        console.log("Let's study HTML!");

      } else if (randomTopic === 'CSS') {

        console.log("Let's study CSS!");

      } else if (randomTopic === 'Git') {

        console.log("Let's study Git!");

      } else if (randomTopic === 'JavaScript') {

        console.log("Let's study JavaScript!");

      } else {

        console.log('Please try again!');
      }
}

function ListTopics(){
    for(var i = 0; i < topics.length; i++){
        console.log(topics[i]);
    }

}
