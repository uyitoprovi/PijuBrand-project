const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");
function sendEmail(){
    const bodyMessage =`Full Name: ${fullName.value}<br> Email: ${email.value}
    <br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
    Email.send({
        SecureToken: "08e94f19-d10a-4bc5-9a92-1dfc5c92271a",
        Host : "smtp.elasticemail.com",
        Username : "uyitoprovi@gmail.com",
        Password : "AF41E6118E03E5388232A054B385D77EA1BD",
        To : 'uyitoprovi@gmail.com',
        From : "uyitoprovi@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
    message => {
        if(message == "ok"){
            swal.fire({
                title: "success!",
                text:"message sent successfully!",
                icon: "success"
            }); 
        }
    });
}


function checkInputs(){
        const items = document.querySelectorAll('.item');
        for (const item of items) {
            if(item.value == ""){
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
            item.addEventListener("keyup", () => {
                if(item.value != "") {
                    item.classList.remove("error");
                    item.parentElement.classList.remove("error");

                }
                else{
                    item.classList.add("error");
                    item.parentElement.classList.add("error");
                }
            })
        }
    }
    function checkEmail() {
        const emailRegex = /^([a-z\d\,-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        const  errorTextEmail = docume.querySelector(".error-txt.email");
        if(!email.value.match(emailRegex)){
            email.classList.add("error");
            email.parentElement.classList.add("error");
            if(email.value != ""){
                errorTextEmail.innerText = "enter a valid email address";

            }
            else{
                errorTextEmail.innerText = "email address can't be blank";

            }
        }
        else{
            email.classList.remove("error");
            email.parentElement.classList.remove("error");
        }
    }
form.addEventListener("submit", (e) => {
    e.preventDefault();
     checkInputs(); 
     if(!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error")
      && !subject.classList.contains("error") && !mess.classList.contains("error")){
        sendEmail();

        form.reset();
        return false;
     }
});