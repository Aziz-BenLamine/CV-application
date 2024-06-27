export default function General() {
  return (
    <div className="form-element">
      <h1>Personal Detail</h1>
      <div className="input-grid">
        <div className="input-element">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />
        </div>
        <div className="input-element">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
        </div>
        <div className="input-element">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="input-element">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" />
        </div>
        <div className="links">
          <h3>Links</h3>
          <div className="input-element">
            <label htmlFor="label">Label</label>
            <input type="text" id="label" />
          </div>
          <div className="input-element">
            <label htmlFor="link">Link</label>
            <input type="url" id="link" />
          </div>
          <button>+ Add Link</button>
        </div>
      </div>
    </div>
  );
}
