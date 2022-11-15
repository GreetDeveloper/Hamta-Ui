function sendMail(params){
    var TempParams = {
        sender_name : document.getElementById("name").value,
        sender_phone: document.getElementById("phone").value,
        appointment_date: document.getElementById("date").value,
        Service_methode : document.getElementById("Services").value,
        Sender_Message : document.getElementById("message").value,
    };

    emailjs.TempParams('service_g7gj7ya', 'template_en5xwkk', TempParams)
    .then(function(response){
        console.log("successfull", response.status, response.txt);
    }, function(error){
        console.log('FAILED...', error);
    });
}