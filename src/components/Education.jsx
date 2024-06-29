export default function Education(props) {
  return (
    <div className="form-element">
      <h1>Education</h1>
      <div className="input-grid">
        <div className="input-element">
          <label htmlFor="school-name">School</label>
          <input
            type="text"
            id="school-name"
            value={props.schoolName}
            onChange={(e) => props.onSchoolChange(e)}
          />
        </div>
        <div className="input-element">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            value={props.degree}
            onChange={(e) => props.onDegreeChange(e)}
          />
        </div>
        <div className="input-element">
          <label htmlFor="start-date">Start</label>
          <input
            type="date"
            id="start-date"
            value={props.degreeStart}
            onChange={(e) => props.onDegreeStartChange(e)}
          />

          <label htmlFor="end-date">End</label>
          <input
            type="date"
            id="end-date"
            value={props.degreeEnd}
            onChange={(e) => props.onDegreeEndChange(e)}
          />
        </div>
        <div className="input-element">
          <label htmlFor="city-country">City, Country</label>
          <input
            type="text"
            id="city-country"
            value={props.location}
            onChange={(e) => props.onLocationChange(e)}
          />
        </div>
      </div>
    </div>
  );
}
