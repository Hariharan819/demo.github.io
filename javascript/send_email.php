<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $contact = htmlspecialchars($_POST['contact']);
    $services = htmlspecialchars($_POST['services']);
    $description = htmlspecialchars($_POST['description']);

    // Email details
    $to = "contactus_ipartnerconsulting@blogpal.ai"; // Replace with the recipient email address
    $subject = "New Contact Form Submission";
    $message = "
        Name: $name\n
        Email: $email\n
        Contact: $contact\n
        Service Required: $services\n
        Description: $description
    ";
    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n";

    // SMTP details
    $smtp_host = "premium172.web-hosting.com";
    $smtp_port = 587; // Using STARTTLS
    $smtp_user = "adrian.haword@ipttas.com"; // Your SMTP username
    $smtp_pass = "iPartner$2024"; // Your SMTP password

    // Additional headers
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Create the email using SMTP
    ini_set("SMTP", $smtp_host);
    ini_set("smtp_port", $smtp_port);
    ini_set("sendmail_from", $smtp_user);

    // Attempt to send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send the message.";
    }
} else {
    echo "Invalid request.";
}
?>
