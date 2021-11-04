<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form class="contact-form" action="contactform.php" method="post">
        <input type="text" name="name" placeholder="Full name" required>
        <input type="text" name="email" placeholder="Email" required>
        <input type="text" name="subject" placeholder="Subject" required>
        <textarea name="message" placeholder="Message" cols="30" rows="10"></textarea>
        <button type="submit" name="submit">Send</button>
    </form>
</body>
</html>