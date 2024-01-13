import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./profile.css";

const skills = [
  {
    skill: "Python",
    level: "advanced",
    color: "blue",
  },
  {
    skill: "Java",
    level: "advanced",
    color: "orange",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "teal",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "red",
  },
  {
    skill: "Kotlin",
    level: "intermediate",
    color: "purple",
  },
  {
    skill: "React Native",
    level: "intermediate",
    color: "teal",
  },
];

function Profile() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="Sesame-Reyka.jpg" alt="Maxine Shir" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Maxine Shi</h1>
      <p className="body">
        A passionate programmer who loves to learn about new technologies and
        simplifying tasks through code. In my freetime, I enjoy exploring new
        videogames, skiing, surfing or simply hanging out with my cat, Sesame.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "advanced" && "💪"}
        {level === "intermediate" && "📖"}
        {level === "beginner" && "✨"}
      </span>
    </div>
  );
}

export default Profile;
