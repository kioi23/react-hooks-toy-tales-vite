function ToyCard({ toy, onDeleteToy, onUpdateToy }) {
  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    }).then(() => onDeleteToy(toy.id));
  }

  function handleLike() {
    const updatedLikes = toy.likes + 1;

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ likes: updatedLikes })
    })
      .then((res) => res.json())
      .then((updatedToy) => onUpdateToy(updatedToy));
  }

  return (
    <div>
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} width="200" />
      <p>{toy.likes} Likes</p>
      <button onClick={handleLike}>Like ❤️</button>
      <button onClick={handleDelete}>Donate</button>
    </div>
  );
}

export default ToyCard;
