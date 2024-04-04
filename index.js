// Add your code here
//trial number 3
//this time trying to keep it as simple as possible
//function called submitData that takes in two strings as its arguments
//these strings will be the values for the keys in the object i will make to handle user input
function submitData(nameInput, emailInput) {
    const formData = {
      name: nameInput,
      email: emailInput
    };
//makinh use of the POST method
//including the headers and the body
    const userObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
//when a successful POST request happens, the server will give us a response and in the body of that response will be a newly assigned id
// we can target that id
//we will use a then to access the respsonse and parse it 
//we will use a second then to 
    return fetch("http://localhost:3000/users", userObj)
      .then(res => res.json())
      .then(data => {
        document.body.innerHTML += `<p>User ID: ${data.id}</p>`; //appending the value to the DOM
      })
      .catch(error => {
        document.body.innerHTML += `<p>Error: ${error.message}</p>`;
      });
}


//the methods below were for practice
/*
//this method works but won't pass the npm tests as well
//creating a form that takes in  user input for their name and email
//the form will be a child of the body element
const form = document.createElement('form');
document.body.appendChild(form);

//creating an input field for the users name with id "name"
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.id = 'name';
nameInput.placeholder = 'Your Name';
form.appendChild(nameInput);

//creating an input field for the users email address with id "email"
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'email';
emailInput.placeholder = 'Your Email Address';
emailInput.required = true;
form.appendChild(emailInput);

//Create a submit button to send the data entered by the user when clicked
const submitButton = document.createElement('button');
submitButton.id = 'btn'
submitButton.innerText = 'Submit';
submitButton.type='submit'
form.appendChild(submitButton)

//writing a submitData function that returns a fetch() so that other functions can tack on their own then() and catch() calls.
//this function will be the second argument of the event listener
document.getElementById('btn').addEventListener("click", submitData)

//the event handler
function submitData(e) {
    e.preventDefault();

    let userObj = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    }

    return fetch ("http://localhost:3000/users", {
        method:"POST", 
        headers:{
            "Content-Type":"application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userObj)
    })
    .then (res => res.json())
    .then (data => console.log(data))
    .catch (error => {
        console.error("Error:", error)
    })
}
*/
/*
//this method also works but it doesn't pass the npm tests i'm not sure why
const form = document.createElement("form");

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.id = 'name';
nameInput.placeholder = 'Your Name';

const emailInput = document.createElement('input');
emailInput.type = "text";
emailInput.id = "email";
emailInput.placeholder = "Your Email Address";

const submitButton = document.createElement('button')
submitButton.type = "submit"
submitButton.id = "btn"
submitButton.innerText = "SUBMIT"

document.body.appendChild(form);
form.appendChild(nameInput);
form.appendChild(emailInput);
form.appendChild(submitButton);
//creating a function with a form to take in user data
//function submitData(emailInput, nameInput) {

form.addEventListener("submit", submitData) //removing brackets to prevent the function from executing immediately

function submitData(e) {
    e.preventDefault()

    // Accessing the form input values directly
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;

    let userObj = {
        name: nameValue,
        email: emailValue
    }

    return fetch ("http://localhost:3000/users", {
        method:"POST", 
        headers:{
            "Content-Type":"application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userObj)
    })
    .then (res => res.json())
    .then (data => console.log(data))
    .catch (error => {
        console.error("Error:", error)
    })
}
*/




