import React, { useState } from "react";

const Details = () => {
  const [formData, setFormData] = useState({
    name: "",
    degree: "",
    institution: "",
    graduationYear: "",
    gpa: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div>
      <h2>Student Education Details</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={formData.name}
          onChange={handleChange}
          // className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={formData.degree}
          onChange={handleChange}
          // className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="institution"
          placeholder="Institution"
          value={formData.institution}
          onChange={handleChange}
          // className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="graduationYear"
          placeholder="Graduation Year"
          value={formData.graduationYear}
          onChange={handleChange}
          // className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="gpa"
          placeholder="GPA"
          value={formData.gpa}
          onChange={handleChange}
          // className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          // className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Details;
