// selecting html element with id "form"
const form = document.getElementById("form");

// selecting html element with id "input"
const input = document.getElementById("input");

// selecting html element with id "msg"
const msg = document.getElementById("msg");

// selecting html element with id "posts"
const posts = document.getElementById("posts");

/**
 * building a submit event listener for the form, 
 * to prevent the default behaviour of the app
 *  
 * */ 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

let formValidation = () => {};