window.onload = function() {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const phone = document.getElementById('phone');
    const confirm_password = document.getElementById('confirm-password') 
    const submit = document.getElementById('submit')
    const emailReg = /\w+@\w+.w+/g;
    // This password regex code defines a password that has 
    // at least 8 characters with 
    // at least one lowercase letter,
    // at least one uppercase letter,
    // at least one number and 
    // at least one special character
    const passwordReg = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?])[a-zA-Z0-9!?:\/]{8,}/g;
    const phoneReg = /\d{4}\s\d{3}\s\d{3}/g;
    
    const tests = [
        emailReg.test(email),
        passwordReg.test(password),
        phoneReg.test(phone)
    ]
    
    function check(){
        if(tests[0] === false){
            alert("Please enter a valid email")        
        }
        if(tests[1] === false){
            alert("Invalid password! Your Password should have at least 8 characters with at least one lowercase and uppercase letter, at least one number digit and a special character.")
        }
        if(password != confirm_password){
            alert("The password i")
        }
        if(tests[2] === false){
            alert("Please enter a valid phone number")
        }
    }
    if(submit){
        submit.addEventListener('click', () =>{
            let mistakes = 0;
            for(let i = 0; i<tests.length; i++){
                if(tests[i] === false){
                    mistakes++;
                }
            }
        
            if(mistakes > 0){
                check();
            }else{
                alert("Your account has been registered successfuly! Thank you.");
            }
        })
    }
}



