import react, { useState } from "react";

const Test = () => {
  // const [name, setName] = useState();
  const [userArr, setUserArr] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    degree: "",
    institution: "",
    graduationYear: "",
    gpa: "",
  });

  const user = JSON.parse(localStorage.getItem("userData"));
  console.log("The values we feteched", user);

  const handleSave = (e) => {
    e.preventDefault();
    // console.log("Submitted Data:", userArr);
    console.log("Submitted Data:", formData);

    console.log("the Name you entered :", formData.name);
    userArr.push(formData.name);
    userArr.push(formData.degree);
    userArr.push(formData.institution);
    userArr.push(formData.graduationYear);
    userArr.push(formData.gpa);
    console.log("the check", userArr);
    setFormData("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Submitted Data:", formData);
  // };

  return (
    // <div style={{ marginLeft: "100px" }}>
    //   <p>Hello Write </p>;
    //   <input
    //     type="text"
    //     placeholder="Enter your Name"
    //     value={name}
    //     required
    //     onChange={(event) => {
    //       setName(event.target.value);
    //     }}
    //   />
    <div style={{ marginLeft: "370px" }}>
      <h2>Student Education Details</h2>
      <form onSubmit={handleSave} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={formData.degree}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="institution"
          placeholder="Institution"
          value={formData.institution}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="graduationYear"
          placeholder="Graduation Year"
          value={formData.graduationYear}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gpa"
          placeholder="GPA"
          value={formData.gpa}
          onChange={handleChange}
        />
        <button onClick={handleSave} style={{ marginLeft: "130px" }}>
          Save
        </button>
        {/* To Display Users DATA */}
        <div>
          {userArr.length > 0 ? (
            <div>
              {userArr.map((user, index) => {
                return <span key={index}>{user + ","}</span>;
              })}
            </div>
          ) : (
            <tbody>
              <tr>
                <th>Name</th>
                <th>Degree</th>
                <th>Institution</th>
                <th>Graduation Year</th>
                <th>GPA</th>
              </tr>
              {userArr.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.degree}</td>
                  <td>{item.institution}</td>
                  <td>{item.graduationYear}</td>
                  <td>{item.gpa}</td>
                </tr>
              ))}
            </tbody>
          )}
        </div>
      </form>
    </div>
  );
};

export default Test;
