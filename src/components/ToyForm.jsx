import { useState } from "react";

function ToyForm({ onAddToy }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newToy = {
      name: name,
      image: image,
      likes: 0
    };

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToy)
    })
      .then((response) => response.json())
      .then((data) => onAddToy(data));

    setName("");
    setImage("");
  }

  return (
    <div className="toy-form">
      <h2>Add a Toy</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Toy name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">
          Add Toy
        </button>
      </form>
    </div>
  );
}

export default ToyForm;