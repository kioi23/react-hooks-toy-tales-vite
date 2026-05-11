import React from "react";

function ToyCard() {
  return (
    <div className="card" data-testid="toy-card">
      <h2>{"" /* Toy's Name */}</h2>
      <img
        src={"" /* Toy's Image */}
        alt={"" /* Toy's Name */}
        className="toy-avatar"
      />
      <p>{"" /* Toy's Likes */} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn">Donate to GoodWill</button>
    </div>
  );
}
function handleDelete() {
  fetch(`http://localhost:3001/toys/${toy.id}`, {
    method: "DELETE"
  })
  .then(() => onDeleteToy(toy.id));
}
<button onClick={handleDelete}>Donate</button>

function handleDeleteToy(id) {
  const updatedToys = toys.filter((toy) => toy.id !== id);
  setToys(updatedToys);
}
<ToyCard
  key={toy.id}
  toy={toy}
  onDeleteToy={handleDeleteToy}
/>


export default ToyCard;
