import React from "react";
import CodeEditor from "utils/CodeEditor";

const myIndexInfo = `import React from "react";

export default function Index() {

  /* About Me */
  const aboutMe = [
    "Hi I am Ajay Nishad, Frontend Developer | Mumbai, India",
    "A React craftsman by day, digital architect by night.",
    "I'm a passionate software engineer who thrives on creating seamless, user-centered web experiences.",
    "My specialty is building robust, scalable applications with React.js and the modern JavaScript ecosystem.",
  ];

  /* Education */
  const education = {
    college: "Shree L R Tiwari College of Engineering",
    degree: "Bachelor's in Computer Engineering",
    year: "2024",
    cgpa: 8.59,
  };

  /* Work Experience */
  const workExperience = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Expound Technivo",
      location: "Maharashtra, India",
      startDate: "5th Aug 2024",
      endDate: "Present",
    },
  ];

  return {
    aboutMe,
    education,
    workExperience,
  };
}
`;

export default function Index() {
  return (
    <div>
      <CodeEditor value={myIndexInfo} lang="js" />
    </div>
  );
}
