import React from "react";
import CodeEditor from "utils/CodeEditor";

const myGithubInfo = `# Ajay Nishad

**Username:** ajay-nishad25

**Name:** Ajay Nishad  

**Bio:**  
- I'm Ajay Nishad, a passionate computer engineering student with a thirst for knowledge and tech.  
- I've been fascinated by computers and its endless possibilities.

**Company:** Expound Technivo  
**Location:** Localhost:3000

**Public Project/Repos**
- Repo name : React-Crypto-Watcher
- Repo name : React-Codepen-Clone
- Repo name : React-GithubAPI
- Repo name : React-Markdown-Preview
- Repo name : React-News
- Repo name : React-TODO
- Repo name : ToDo-Java-Swings
- Repo name : UserData
- ...

`;

export default function Github() {
  return (
    <div className="hp-5">
      <CodeEditor value={myGithubInfo} lang="md" />
    </div>
  );
}
