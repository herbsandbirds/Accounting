<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $preferred_datetime = $_POST['preferred_datetime'];
  $service = $_POST['service'];
  $message = $_POST['message'];

  $to = 'rizzyullah@Gmail.com';
  $subject = 'New Consultation Request';
  $body = "Name: $name\nEmail: $email\nPhone: $phone\nPreferred Date and Time: $preferred_datetime\nService: $service\nMessage: $message";

  mail($to, $subject, $body);
  header('Location: thank_you.html');
?>
