import "./styles/Preview.css";

export default function Preview({ generalInfo, educations }) {
  return (
    <div className="preview">
      <h1>
        {generalInfo.firstName} {generalInfo.lastName}
      </h1>
      <h3>Profile</h3>
      <p>
        {generalInfo.email} | {generalInfo.phone} | Linkedin: Aziz Ben Lamine |
        Github: Aziz-BenLamine
      </p>

      <hr />
      <h3>Profile</h3>
      <p>
        Freshman Computer Engineering student passionate about technology,
        programming, and problemsolving. Enthusiastic about learning new skills
        and contributing to exciting projects.
      </p>
      <hr />

      <h3>Education</h3>
      {educations.map((education) => (
        <p key={education.id}>
          <strong>{education.schoolName}</strong>, {education.location} &emsp;
          &emsp; {education.degreeStart} - {education.degreeEnd}
          <br />
          {education.degree}
        </p>
      ))}
      <hr />

      <h3>Projects</h3>
      <div>
        <ul>
          <strong>
            <li>2D Platformer Game</li>
          </strong>
          <p>February 2024 - April 2024</p>
          <p>
            – Designed and developed a 2D platformer game in a team of 6 using C
            and SDL on Ubuntu Linux <br />– Implemented game mechanics including
            player movement, collision detection, and level progression.
          </p>
        </ul>
      </div>
      <hr />

      <h3>Skills</h3>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
