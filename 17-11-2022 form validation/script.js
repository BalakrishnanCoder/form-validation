const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit',e =>{
    e.preventDefault();
    checkInput();
});
function checkInput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //check condition
    //username check
    if(usernameValue === ''){
        setError(username, 'Username Cannot Be Blank');
    }else{
        setSuccess(username);
    }
    //emailcheck
    if(emailValue === ''){
        setError(email, 'Email Cannot Be Blank');
    }else if(!isEmail(emailValue)){
        setError(email,'Not a valid Email');
    }
    else{
        setSuccess(email);
    }
    
   
    //password check
    if(passwordValue === ''){
        setError(password, 'Password Cannot Be Blank');
    }
    else{
        setSuccess(password);
    }
    if(password2Value === ''){
        setError(password2, 'Please enter confirm password')
    }
    else if(password2Value !== passwordValue){
        setError(password2, 'Password Does not match');
    }else{
        setSuccess(password2);
    }
}
    function setError(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'form-control error';
        small.innerText = message;
    }

    function setSuccess(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    
    }
    function isEmail(email){
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
        return re.test(email);
            
    }
