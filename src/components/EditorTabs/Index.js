import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

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
      <CodeMirror
        value={myInfo}
        height="100vh"
        theme="dark"
        extensions={[javascript()]}
        readOnly={true}
        basicSetup={{
          lineNumbers: true,
        }}
      />
    </div>
  );
}
