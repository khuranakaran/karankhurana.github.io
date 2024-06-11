<?php
// Retrieve form data
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$company = $_POST['company'];
$message = $_POST['message'];

// Set email recipient
$to = 'khuranakaran18@gmail.com';

// Set email subject
$subject = 'Contact Form Submission';

// Compose email message
$body = "Name: $name\n";
$body .= "Phone: $phone\n";
$body .= "Email: $email\n";
$body .= "Company: $company\n\n";
$body .= "Message:\n$message";

// Set headers
$headers = "From: $email";

// Send email
if (mail($to, $subject, $body, $headers)) {
    echo 'Email sent successfully.';
} else {
    echo 'Error: Unable to send email.';
}
?>
