export const  htmlMessage = `
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f6f6f6;
        }
        .container {
            background-color: #ffffff;
            padding: 30px;
            border-radius: 8px;
            max-width: 600px;
            margin: auto;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
            font-size: 24px;
        }
        p {
            color: #777;
        }
        .success-icon {
            font-size: 48px;
            color: #4CAF50;
            text-align: center;
            margin-bottom: 20px;
        }
        .reply-button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #4CAF50; 
            color: #ffffff;
            border-radius: 8px;
            text-decoration: none;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="success-icon">✔️</div>
        <h1>Welcome to Our Platform</h1>
        <p>Thank you for registering with us! Your registration was successful, and you are now a part of our community.</p>
        <a href="mailto:${process.env.EMAIL_USERNAME}?subject=Response to Welcome Email" class="reply-button">Reply to this email</a>
    </div>
</body>
</html>
`;


