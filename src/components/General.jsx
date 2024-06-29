import { useState } from "react";

export default function General(props) {
  function handlefirstNameChange(e) {
    props.setGeneralInfo({ ...props.generalInfo, firstName: e.target.value });
  }

  function handlelastNameChange(e) {
    props.setGeneralInfo({ ...props.generalInfo, lastName: e.target.value });
  }

  function handleEmailChange(e) {
    props.setGeneralInfo({ ...props.generalInfo, email: e.target.value });
  }

  function handleNumberChange(e) {
    props.setGeneralInfo({ ...props.generalInfo, phone: e.target.value });
  }

  return (
    <div className="form-element">
      <h1>Personal Detail</h1>
      <div className="input-grid">
        <div className="input-element">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={props.generalInfo.firstName}
            onChange={(e) => handlefirstNameChange(e)}
          />
        </div>
        <div className="input-element">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={props.generalInfo.lastName}
            onChange={(e) => handlelastNameChange(e)}
          />
        </div>
        <div className="input-element">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={props.generalInfo.email}
            onChange={(e) => handleEmailChange(e)}
          />
        </div>
        <div className="input-element">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={props.generalInfo.phone}
            onChange={(e) => handleNumberChange(e)}
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
