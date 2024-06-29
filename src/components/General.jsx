import { useState } from "react";

export default function General(props) {
  const [] = useState();
  return (
    <div className="form-element">
      <h1>Personal Detail</h1>
      <div className="input-grid">
        <div className="input-element">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={props.firstName}
            onChange={(e) => props.onNameChange(e)}
          />
        </div>
        <div className="input-element">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={props.lastName}
            onChange={(e) => props.onLastNameChange(e)}
          />
        </div>
        <div className="input-element">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={props.email}
            onChange={(e) => props.onEmailChange(e)}
          />
        </div>
        <div className="input-element">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={props.phone}
            onChange={(e) => props.onPhoneChange(e)}
          />
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
