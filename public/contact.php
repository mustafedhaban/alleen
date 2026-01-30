<?php
/**
 * Contact Form Handler for YeGara/cPanel Hosting
 * 
 * INSTRUCTIONS:
 * 1. Ensure 'no-reply@alleenconsultancy.com' is created in your cPanel Email Accounts.
 * 2. Upload this file to your 'public_html' folder (deployment script handles this).
 */

// Set headers
header("Content-Type: application/json; charset=UTF-8");

// Allow CORS if needed (for safety, though same-origin doesn't strictly need it)
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (strpos($origin, 'alleenconsultancy.com') !== false) {
    header("Access-Control-Allow-Origin: $origin");
}

// Only allow POST
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method Not Allowed"]);
    exit;
}

// 1. Sanitize & Validate Inputs
$name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$organization = isset($_POST['organization']) ? strip_tags(trim($_POST['organization'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL) : false;
$message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';

if (empty($name) || !$email || empty($message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid input data."]);
    exit;
}

// 2. Configuration
// CRITICAL: This email MUST exist in your cPanel to pass SPF/DKIM checks.
// Go to cPanel > Email Accounts > Create 'no-reply@alleenconsultancy.com'
$sender_email = "no-reply@alleenconsultancy.com"; 

// Where you want to receive the inquiries
$recipient_email = "info@alleenconsultancy.com"; 

$subject = "New Contact Inquiry from $name";

// 3. Email Body
$email_body = "You have received a new message from your website contact form.\n\n";
$email_body .= "Name: $name\n";
$email_body .= "Organization: $organization\n";
$email_body .= "Email: $email\n";
$email_body .= "--------------------------------------------------\n\n";
$email_body .= "Message:\n$message\n";

// 4. Headers
$headers = "From: Alleen Website <$sender_email>\r\n";
$headers .= "Reply-To: $name <$email>\r\n"; // Hit reply to email the user directly
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// 5. Send Email
// The "-f" parameter sets the envelope sender, essential for cPanel delivery
$mail_sent = mail($recipient_email, $subject, $email_body, $headers, "-f$sender_email");

if ($mail_sent) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Message sent successfully."]);
} else {
    // Log error to server error log (visible in cPanel)
    error_log("Contact form failed to send email to $recipient_email");
    
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Server failed to send email."]);
}
?>
