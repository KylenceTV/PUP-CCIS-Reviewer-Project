function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        description: document.getElementById("description").value,
    };

    console.log("Sending email with parameters:", parms);

    // Validate form fields
    if (!parms.name || !parms.email || !parms.subject || !parms.description) {
        alert("All fields are required!");
        return;
    }

    // Send email using EmailJS
    emailjs.send("service_y6bjh9t", "template_8uwwb6d", parms)
        .then(function(response) {
            alert("Email Sent Successfully!");
            console.log("SUCCESS:", response);
        })
        .catch(function(error) {
            alert("Failed to send email. Reason: " + (error.text || "Unknown error"));
            console.error("EmailJS Error Details:", error);
        });
}
