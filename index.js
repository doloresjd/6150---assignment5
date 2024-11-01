document.getElementById('registrationForm').onsubmit = function(event) {
    event.preventDefault();
    var errors = [];

    var name = document.getElementById('name').value;
    if (name.length < 3) {
        errors.push("Name must be at least 3 characters long.");
    }

    var yearOfBirth = document.getElementById('yearOfBirth').value;
    if (yearOfBirth < 1901 || yearOfBirth > 2023) {
        errors.push("Year of Birth must be between 1901 and 2023.");
    }

    var liveInUS = document.getElementById('liveInUS').checked;
    var zipcode = document.getElementById('zipcode').value;
    if (liveInUS && (zipcode.length !== 5 || !/^\d{5}$/.test(zipcode) || zipcode === "00000")) {
        errors.push("Zipcode must be 5 digits long and cannot be 00000.");
    }

    var password = document.getElementById('password').value;
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }

    var pizzaTypeSelected = document.querySelector('input[name="pizzaType"]:checked');
    if (!pizzaTypeSelected) {
        errors.push("Please select your preferred type of pizza.");
    }

    if (errors.length > 0) {
        document.getElementById('errorMessages').innerHTML = errors.join("<br>");
    } else {
        alert("Accepted");
        document.getElementById('registrationForm').reset(); 
    }
};


function toggleZipcodeVisibility() {
    var liveInUS = document.getElementById('liveInUS').checked;
    var zipcodeWrapper = document.getElementById('zipcodeWrapper');
    var zipcodeInput = document.getElementById('zipcode');
    
    if (liveInUS) {
        zipcodeWrapper.style.display = 'block';
        zipcodeInput.required = true;  
    } else {
        zipcodeWrapper.style.display = 'none';
        zipcodeInput.required = false; 
        zipcodeInput.value = '';       
    }
}

