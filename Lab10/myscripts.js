function validateForm() {
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var password = document.getElementById("password").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var academicYear = document.getElementById("academic_year").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (firstName.trim() === "") {
        alert("Please enter your First Name.");
        return false;
    }

    if (lastName.trim() === "") {
        alert("Please enter your Last Name.");
        return false;
    }

    if (password.trim() === "") {
        alert("Please enter a Password.");
        return false;
    }

    if (!gender) {
        alert("Please select your Gender.");
        return false;
    }

    if (academicYear === "") {
        alert("Please select your Academic Year.");
        return false;
    }

    if (email.trim() === "") {
        alert("Please enter your Email.");
        return false;
    }

    if (phone.trim() === "") {
        alert("Please enter your Phone number.");
        return false;
    }

    return true;
}