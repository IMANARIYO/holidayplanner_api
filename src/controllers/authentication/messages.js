export const htmlMessage = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Holiday planners</title>
     <style>
      body {
        background-color: #fff;
        font-family: sans-serif;
        padding: 20px;
      }

      .header {
        width: 85%;
        margin: auto;
        padding: 35px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      h1 {
        font-size: 40px;
        margin-top: 0;
        color: purple;
        margin-bottom: 15px;
        padding-bottom: 15px;
        text-align: center;
      }

      h1:hover {
        color: #0ef;
      }

      a {
        width: 25%;
        cursor: pointer;
      }

      .menu {
        width: 80%;
        background-color: #fff;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        max-width: 500px;
      }

      .menu p {
        color: green;
        font-weight: 500;
      }
      .menu button {
        width: 200px;
        padding: 15px 0;
        margin: 20px 120px;
        text-align: center;
        justify-content: center;
        border-radius: 25px;
        font-weight: bold;
        border: 2px solid #009688;
        background: transparent;
        color: black;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .menu button:hover {
        color: blueviolet;
        background-color: cyan;
      }

      .connect p {
        color: black;
        font-weight: 500;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <a
        href="https://holidayplanner.onrender.com/tour"
        ><img src="logo.png" class="logo" alt="HolidaysPlanners icon"
      /></a>
    </div>
    <h1>Welcome to our website</h1>

    <div class="menu">
      <hr class="bottom-line" />
      <p>
        Dear User,<br /><br />
        Welcome to Holidays Planners! We're thrilled to have you join our travel
        community and embark on a journey of unforgettable adventures. Your
        decision to sign up with us is the first step towards discovering the
        world's wonders and creating memories that will last a lifetime.
      </p>
      <a
        href="https://holidayplanner.onrender.com/tour"
        ><button type="button">Explore the World</button></a
      >
    </div>
    <footer>
      <div class="connect">
        <p>
          <b>
            Thank you for choosing Holidays Planners as your travel partner.<br />
            We can't wait to be a part of your travel stories and help you
            create memories that will last a lifetime. <br />
            adventure starts here! <br /><br />Best regards,
          </b>
        </p>
      </div>
    </footer>
   
  </body>
</html>
`;

export const contactHtmlMessage = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Holiday planners - Contact</title>
    <style>
      body {
        background-color: #fff;
        font-family: sans-serif;
        padding: 20px;
      }

      .header {
        width: 85%;
        margin: auto;
        padding: 35px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      h1 {
        font-size: 40px;
        margin-top: 0;
        color: purple;
        margin-bottom: 15px;
        padding-bottom: 15px;
        text-align: center;
      }

      h1:hover {
        color: #0ef;
      }

      a {
        width: 25%;
        cursor: pointer;
      }

      .menu {
        width: 80%;
        background-color: #fff;
        margin-left: auto;
        margin-right: auto;
        padding: 20px;
        max-width: 500px;
      }

      .menu p {
        color: green;
        font-weight: 500;
      }

      .connect p {
        color: black;
        font-weight: 500;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <a
        href="https://holidayplanner.onrender.com/tour"
        ><img src="logo.png" class="logo" alt="HolidaysPlanners icon"
      /></a>
    </div>
    <h1>Thank You for Contacting Us!</h1>

    <div class="menu">
      <hr class="bottom-line" />
      <p>
        Dear User,<br /><br />
        Thank you for reaching out to Holidays Planners! Your message is important to us, and we'll get back to you as soon as possible. In the meantime, continue exploring our website and see what adventures await!
      </p>
      <a
        href="https://holidayplanner.onrender.com/tour"
        ><button type="button">Return to Website</button></a
      >
    </div>
    <footer>
      <div class="connect">
        <p>
          <b>
            If you have any urgent queries or require immediate assistance, please don't hesitate to call our customer service hotline. We're here to assist you!<br /><br />
            Best regards,
          </b>
        </p>
      </div>
    </footer>
   
  </body>
</html>
`;
export const replymessage = `<!DOCTYPE html>
<html>
<head>
  <title>Reply to Contact</title>
</head>
<body>
  <div style="font-family: Arial, sans-serif; margin: 20px;">
    <h1>Hello,</h1>
    <p>Your reply to a contact:</p>
    <p>{{reply}}</p>
    <p>Best regards,</p>
    <p>Your Name</p>
  </div>
</body>
</html>
`;
