import React from "react";
import CodeEditor from "utils/CodeEditor";

const myIndexInfo = `.cpp {
  /* C++ enthusiast: Object-oriented and STL */
}

.html5 {
  /* HTML5 expert: Semantic, accessible layouts */
}

.css3 {
  /* CSS/CSS3: Responsive design, Flexbox/Grid  */
}

.javascript {
  /* JavaScript: Modern ES6/ESNext, async programming */
}

.reactjs {
  /* React.js: Development, Hooks, Redux */
}

.bootstrap5 {
  /* Bootstrap 5: Rapid prototyping, grid systems */
}

.materialui {
  /* Material UI: Custom and responsive components */
}

.git {
  /* Git & GitHub: Version control, collaboration */
}

.java {
  /* Java: OOP, core concepts and collections framework */
}

.linux {
  /* Basic Linux: CLI navigation and scripting */
}

.sql {
  /* SQL: Relational database queries */
}

`;

export default function AboutTech() {
  return (
    <div>
      <CodeEditor value={myIndexInfo} lang="css" />
    </div>
  );
}
