/**"use strict"

function sendMail(params){
    var templateParams = {
        from_name: document.getElementById("name").value, 
        from_phone: document.getElementById("phone").value,
       /*email: document.getElementById(".email").value,*/
  /*      from_appointment: document.getElementById("date").value,
        from_Service: document.getElementById("Services").value,
        from_message: document.getElementById("message").value,
    };

    const serviceID = "service_g7gj7ya";
    const TemplateID = "template_m7g0o0s";
    const publicKey = "BLx6f1Al-ZZKPLp9H";

    emailjs.send(serviceID, TemplateID, params)
    .then((res) =>{
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
           /* document.getElementById("email").value = "";*/
  /*          document.getElementById("date").value = "";
            document.getElementById("Services").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("your message send successfully !");
        })
        .catch((err) =>console.log(err));
}

*/