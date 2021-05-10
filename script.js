// Variable temporarily stores user's inputted age 
let age = 0

// Connect "Find Out" button to "findout" function
document.getElementById('button').addEventListener('click', findOut)

function findOut () {
  // Stores the user's age and converts it into an integer
  age = document.getElementById('answer').value
  age = parseInt(age)

// Program determines what kind of movie user should watch
 if (age >= 17) {
    document.getElementById('text').innerHTML = 'You may view an r-rated movie'
} else if (age >= 13) {
    document.getElementById('text').innerHTML = 'You may view a pg-13 movie'
} else if (age >= 5) {
    document.getElementById('text').innerHTML = 'You may view a G-rated or PG movie'
}  else {
    document.getElementById('text').innerHTML = "Sorry, your too young to view most movies"
}
}