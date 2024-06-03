function sendmail(){
    var params={
        floatingInput:document.getElementById("floatingInput").value,
        floatingEmail:document.getElementById("floatingEmail").value,
        floatingPassword:document.getElementById("floatingPassword").value,

    };


const serviceID="service_0n1o8ve";
const templateID="template_t368e9i"


emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("floatingInput").value="";
        document.getElementById("floatingEmail").value="";
        document.getElementById("floatingPassword").value="";
        console.log(res);
        alert("Your message sent successfully..");
    })

    .catch(err=> console.log(err));}
