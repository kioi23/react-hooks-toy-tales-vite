
function ToyCard({ toy, onDeleteToy, onUpdateToy }) {

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
      .then(() => onDeleteToy(toy.id));
  }

  function handleLike() {

    const updatedLikes = {
      likes: toy.likes + 1
    };

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedLikes)
    })
      .then((response) => response.json())
      .then((updatedToy) => onUpdateToy(updatedToy));
  }

  return (

    <div className="card" data-testid="toy-card">

      <h2>{toy.name}</h2>

      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />

      <p>{toy.likes} Likes</p>

      <button onClick={handleLike}>Like {"<3"}</button>

      <button onClick={handleDelete}>
        Donate to GoodWill
      </button>

    </div>
  );
}

export default ToyCard;