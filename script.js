const form = document.getElementById("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;

    const message = document.getElementById("message");

    if(name === "") {
        message.textContent = "Please enter your name";
        return;
    }

    if(email === "") {
        message.textContent = "Please enter your email";
        return;
    }

    if(password.length < 6) {
        message.textContent = "Please must be at least 6 characters";
        return;
    }

    if(age < 1 || age > 100) {
        message.textContent = "Please enter a valid age";
        return;
    }

    message.textContent = "Registration successful!🎉🎉🎉";
});
