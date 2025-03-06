import react, { useState } from "react";

const Test = () => {
  const [userArr, setUserArr] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    degree: "",
    institution: "",
    graduationYear: "",
    gpa: "",
  });

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setUserArr((prev) => [...prev, formData]);
    console.log("userArr", userArr);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    // <div style={{ marginLeft: "370px" }}>
    <div className="mt-2">
      <h2 className="underline flex justify-center">
        Student Education Detail
      </h2>
      <div className="flex justify-center">
        <form onSubmit={handleSave} className="w-[700px] ">
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
          <button type="submit" style={{ marginLeft: "130px", width: "200px" }}>
            Save
          </button>
        </form>
      </div>

      {/* To Display Users DATA */}

      {userArr.length > 0 ? (
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Degree</th>
              <th>Institution</th>
              <th>Graduation Year</th>
              <th>GPA</th>
            </tr>

            {userArr.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.degree}</td>
                  <td>{user.institution}</td>
                  <td>{user.graduationYear}</td>
                  <td>{user.gpa}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>No Record Found</div>
      )}
    </div>
  );
};

export default Test;
