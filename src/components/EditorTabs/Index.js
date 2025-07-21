import React from "react";
import CodeEditor from "utils/CodeEditor"; // Updated import

const myInfo = `/* 
  Hey there! 👋
  I'm Ajay Nishad.
*/

const aboutMe = {
  name: "Ajay Nishad",
  education: "B.Tech in Computer Science & Engineering",
  focus: "Full Stack (MERN) Developer",
  interests: ["Web Development", "React.js", "Node.js", "UI/UX"],
  currentRole: "Frontend Engineer at XYZ Company",
  contact: "ajaynishad25@email.com"
};

export default aboutMe;
`;

export default function Index() {
  return (
    <div className="hp-5">
      <CodeEditor value={myInfo} lang="js" />
    </div>
  );
}
