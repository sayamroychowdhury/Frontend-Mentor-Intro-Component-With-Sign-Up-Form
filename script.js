function setError(id, error){
    let particularID = document.getElementById(id);
    particularID.getElementsByClassName("formError")[0].innerHTML = error;
}

function clearErrors(){
    let error = document.getElementsByClassName('formError');
    for (let i = 0; i<error.length; i++){
        error[i].innerHTML = "";
    }
}

function validateForm(){
    let returnVal = true; 
    clearErrors();

    let fname = document.forms['myForm']['fname'].value;
    if (fname.length == 0){
        setError("firstName", "First Name cannot be empty");
        returnVal = false;
    }
    
    let lname = document.forms['myForm']['lname'].value;
    if (lname.length == 0){
        setError("lastName", "Last Name cannot be empty");
        returnVal = false;
    }

    let password = document.forms['myForm']['pass'].value;
    if (password.length == 0){
        setError("password", "Password cannot be empty");
        returnVal = false;
    }

    return returnVal;
}





