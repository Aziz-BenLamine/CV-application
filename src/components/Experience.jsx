export default function Experience() {
  return (
    <div className="form-element">
      <h1>Experience</h1>
      <div className="input-grid">
        <div className="input-element">
          <label htmlFor="school-name">School</label>
          <input type="text" id="school-name" />
        </div>
        <div className="input-element">
          <label htmlFor="degree">Degree</label>
          <input type="text" id="degree" />
        </div>
        <div className="input-element">
          <label htmlFor="start-date">Start</label>
          <input type="date" id="start-date" />

          <label htmlFor="end-date">End</label>
          <input type="date" id="end-date" />
        </div>
        <div className="input-element">
          <label htmlFor="city-country">City, Country</label>
          <input type="text" id="city-country" />
        </div>
      </div>
    </div>
  );
}
