import { useState } from "react";

function ToyForm({ onAddToy }) {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleToggle() {
    setShowForm((prev) => !prev);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const toyData = {
      name: name,
      image: image,
      likes: 0,
    };

    const response = await fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toyData),
    });

    const newToy = await response.json();

    onAddToy(newToy);

    setName("");
    setImage("");
  }

  return (
    <div>
      <button onClick={handleToggle}>
        {showForm ? "Cancel" : "Add a Toy"}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a toy's name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter a toy's image URL..."
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <button type="submit">Create New Toy</button>
        </form>
      )}
    </div>
  );
}

export default ToyForm;