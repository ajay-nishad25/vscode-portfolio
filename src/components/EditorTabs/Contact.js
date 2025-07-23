import React from "react";
import CodeEditor from "utils/CodeEditor";

const contactHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact</title>
</head>
<body>
  <div class="contact-info">
    <h2>Contact Ajay Nishad</h2>
    <p>
      <span>Email: ajaynishad4123@gmail.com</span><br>
      <span>Linkedin: https://www.linkedin.com/in/ajay-nishad25/</span><br>
      <span>Github: https://www.github.com/ajay-nishad25</span><br>
    </p>
  </div>
</body>
</html>

`;

export default function Contact() {
  return (
    <div className="hp-5">
      <span className="text-sm">Contact.html</span>
      <CodeEditor value={contactHtml} lang="html" />
    </div>
  );
}
