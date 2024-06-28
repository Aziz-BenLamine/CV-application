import "./styles/Preview.css";
export default function Preview(props) {
  return (
    <div className="preview">
      <h1>
        {props.firstName} {props.lastName}
      </h1>
      <h3>Profile</h3>
      <p>
        {props.email} | 27-266-798 | Linkedin: Aziz Ben Lamine | Github:
        Aziz-BenLamine
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
      <p>
        <strong>Esprit</strong>, Ariana, Tunisia
      </p>
      <hr />

      <h3>Projects</h3>
      <p>
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
      </p>
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
