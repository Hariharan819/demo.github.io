<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Enable error reporting (for debugging)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Load PHPMailer classes
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $contact = htmlspecialchars($_POST["contact"]);
    $services = htmlspecialchars($_POST["services"]);
    $description = htmlspecialchars($_POST["description"]);

    // Create PHPMailer instance
    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = "mail.blogpal.ai"; // Your SMTP host
        $mail->SMTPAuth = true;
        $mail->Username = "adrian.haword@ipttas.com"; // Your SMTP username
        $mail->Password = "iPartner$2024"; // Your SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Use SSL
        $mail->Port = 465; // SMTP Port

        // Sender & Recipient
        $mail->setFrom($email, $name);
        $mail->addAddress("adrian@ipartnerconsulting.com"); // Your recipient email

        // Email Content
        $mail->isHTML(true);
        $mail->Subject = "New Contact Form Submission";
        $mail->Body    = "
            <h3>New Contact Form Submission</h3>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Contact No:</strong> $contact</p>
            <p><strong>Selected Service:</strong> $services</p>
            <p><strong>Message:</strong><br> $description</p>
        ";

        // Send Email
        if ($mail->send()) {
            echo "success";
        } else {
            echo "error";
        }
    } catch (Exception $e) {
        echo "Error: {$mail->ErrorInfo}";
    }
}
?>
