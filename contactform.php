<?php

if (isset($_POST['submit'])) {
    $name = $_post['name'];
    $subject = $_post['subject'];
    $mailFrom = $_post['email'];
    $message = $_post['message'];

    $mailTo = "peterghostine@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have an email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: contact.php?mailsend");
}