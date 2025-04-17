import React from "react";

export default function RegistrationForm() {
  return (
    <div className="main" style={{ margin: "40px 30px" }}>
      <center>
        <u>
          <h2 style={{ color: "rgb(83, 64, 226)" }}>STUDENT REGISTRATION FORM</h2>
        </u>
      </center>

      <div
        className="container"
        style={{
          backgroundColor: "rgb(83, 64, 226)",
          color: "white",
          marginLeft: "10px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <form>
          <label>FIRST NAME</label>
          <input type="text" /> (max 30 character a-z and A-Z)
          <br />

          <label>LAST NAME</label>
          <input type="text" /> (max 30 character a-z and A-Z)
          <br />

          <label>DATE OF BIRTH</label>
          <select><option>Day</option></select>
          <select><option>Month</option></select>
          <select><option>Year</option></select>
          <br />

          <label>EMAIL ID</label>
          <input type="email" />
          <br />

          <label>MOBILE NUMBER</label>
          <input type="text" /> (10 digit number)
          <br />

          <label>GENDER</label>
          <input type="radio" name="gender" /> Male
          <input type="radio" name="gender" /> Female
          <br />

          <label>ADDRESS</label>
          <input type="text" />
          <br />

          <label>CITY</label>
          <input type="text" maxLength="30" /> (max 30 character a-z and A-Z)
          <br />

          <label>PIN CODE</label>
          <input type="text" maxLength="6" /> (6 digit number)
          <br />

          <label>STATE</label>
          <input type="text" maxLength="30" /> (max 30 character a-z and A-Z)
          <br />

          <label>COUNTRY</label>
          <input type="text" value="India" disabled />
          <br />

          <label>HOBBIES</label>
          <input type="checkbox" /> Drawing
          <input type="checkbox" /> Singing
          <input type="checkbox" /> Dancing
          <input type="checkbox" /> Sketching
          <br />
          <label>Others:</label>
          <input type="text" />
          <br />

          <label>QUALIFICATION</label>
          <table border="1" style={{ borderCollapse: "collapse", marginTop: "10px" }}>
            <thead>
              <tr>
                <th>Sl.No.</th>
                <th>Examination</th>
                <th>Board</th>
                <th>Percentage</th>
                <th>Year of Passing</th>
              </tr>
            </thead>
            <tbody>
              {["Class X", "Class XII", "Graduation", "Masters"].map((exam, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{exam}</td>
                  <td><input type="text" maxLength="10" /></td>
                  <td><input type="text" maxLength="5" /></td>
                  <td><input type="text" maxLength="4" /></td>
                </tr>
              ))}
            </tbody>
          </table>

          <label>COURSES APPLIED FOR</label>
          <br />
          <label htmlFor="bca">BCA</label>
          <input type="radio" name="course" id="bca" />
          <label htmlFor="bcom">B.Com</label>
          <input type="radio" name="course" id="bcom" />
          <label htmlFor="bsc">B.Sc</label>
          <input type="radio" name="course" id="bsc" />
          <label htmlFor="ba">B.A</label>
          <input type="radio" name="course" id="ba" />
          <br />

          <center>
            <div className="buttons" style={{ marginTop: "20px" }}>
              <input type="submit" value="Submit" />
              <input type="reset" value="Reset" />
            </div>
          </center>
        </form>
      </div>
    </div>
  );
}
