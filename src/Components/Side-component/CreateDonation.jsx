import React, { useState } from "react";

const CreateDonation = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("active");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the backend)
    console.log({
      title,
      description,
      targetAmount,
      startDate,
      endDate,
      status,
      image,
    });
  };

  return (
    <div>
      <h2>Create a Donation</h2>
      <form onSubmit={handleSubmit}>
        {/* Donation Title */}
        <div>
          <label>Donation Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {/* Target Amount */}
        <div>
          <label>Target Amount</label>
          <input
            type="number"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            required
          />
        </div>

        {/* Start Date */}
        <div>
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        {/* End Date */}
        <div>
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>

        {/* Donation Status */}
        <div>
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Image (Optional) */}
        <div>
          <label>Donation Image</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>

        {/* Submit Button */}
        <button type="submit">Create Donation</button>
      </form>
    </div>
  );
};

export default CreateDonation;
