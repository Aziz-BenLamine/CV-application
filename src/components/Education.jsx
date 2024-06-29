import { useState } from "react";

export default function Education({ educations, setEducations }) {
  const [editingEducationId, setEditingEducationId] = useState(null);

  function handleEducationChange(id, field, value) {
    setEducations((prevEducations) =>
      prevEducations.map((education) =>
        education.id === id ? { ...education, [field]: value } : education
      )
    );
  }

  function handleEditEducation(id) {
    setEditingEducationId(id);
  }

  function handleDeleteEducation(id) {
    setEducations((prevEducations) =>
      prevEducations.filter((education) => education.id !== id)
    );
    setEditingEducationId(null);
  }

  function handleAddEducation() {
    const newEducation = {
      id: Date.now().toString(),
      schoolName: "",
      location: "",
      degree: "",
      degreeStart: "",
      degreeEnd: "",
    };
    setEducations((prevEducations) => [...prevEducations, newEducation]);
    setEditingEducationId(newEducation.id);
  }

  return (
    <div className="education-section">
      {educations.map((education) => (
        <div key={education.id} className="education-entry">
          {editingEducationId === education.id ? (
            <div className="form-element">
              <h1>Education</h1>
              <div className="input-grid">
                <div className="input-element">
                  <label htmlFor={`school-name-${education.id}`}>School</label>
                  <input
                    type="text"
                    id={`school-name-${education.id}`}
                    value={education.schoolName}
                    onChange={(e) =>
                      handleEducationChange(
                        education.id,
                        "schoolName",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="input-element">
                  <label htmlFor={`degree-${education.id}`}>Degree</label>
                  <input
                    type="text"
                    id={`degree-${education.id}`}
                    value={education.degree}
                    onChange={(e) =>
                      handleEducationChange(
                        education.id,
                        "degree",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="input-element">
                  <label htmlFor={`start-date-${education.id}`}>Start</label>
                  <input
                    type="date"
                    id={`start-date-${education.id}`}
                    value={education.degreeStart}
                    onChange={(e) =>
                      handleEducationChange(
                        education.id,
                        "degreeStart",
                        e.target.value
                      )
                    }
                  />
                  <label htmlFor={`end-date-${education.id}`}>End</label>
                  <input
                    type="date"
                    id={`end-date-${education.id}`}
                    value={education.degreeEnd}
                    onChange={(e) =>
                      handleEducationChange(
                        education.id,
                        "degreeEnd",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="input-element">
                  <label htmlFor={`city-country-${education.id}`}>
                    City, Country
                  </label>
                  <input
                    type="text"
                    id={`city-country-${education.id}`}
                    value={education.location}
                    onChange={(e) =>
                      handleEducationChange(
                        education.id,
                        "location",
                        e.target.value
                      )
                    }
                  />
                </div>
                <button
                  onClick={() => handleDeleteEducation(education.id)}
                  className="delete-button"
                >
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <div
              onClick={() => handleEditEducation(education.id)}
              className="education-preview"
            >
              <p>
                <strong>{education.schoolName}</strong>, {education.location}{" "}
                &emsp; &emsp; {education.degreeStart} - {education.degreeEnd}
                <br />
                {education.degree}
              </p>
            </div>
          )}
        </div>
      ))}
      <button onClick={handleAddEducation} className="add-button">
        Add New Education
      </button>
    </div>
  );
}
