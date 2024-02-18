var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-content")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



var menu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0"
}

function closemenu() {
    sidemenu.style.right = "-200px"
}

// -------send email part-------//

const handleSendEmail = () => {
    const from_name = document.getElementById("from_name")
    const from_email = document.getElementById("from_email")
    const message = document.getElementById("msg")
    const messagebox = document.getElementById("message")

    var templateParams = {
        from_name: from_name.value,
        from_email: from_email.value,
        message: message.value
    };

    emailjs.send('service_relookj', 'template_1vndkif', templateParams)
        .then(function () {
            messagebox.innerHTML = "Message was sent successfully!"
            from_name.value = ""
            from_email.value = ""
            message.value = ""
            setTimeout(function () {
                messagebox.innerHTML = ""
            }, 5000)
        }, function () {
            messagebox.innerHTML = "Sorry, your message was not sent!"
            setTimeout(function () {
                messagebox.innerHTML = ""
            }, 5000)
        });
}