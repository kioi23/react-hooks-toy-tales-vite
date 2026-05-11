import { useState, useEffect } from "react";
import ToyCard from "./components/ToyCard";
import ToyForm from "./components/ToyForm";

function App() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
  }

  function handleDeleteToy(id) {
    const updatedToys = toys.filter((toy) => toy.id !== id);
    setToys(updatedToys);
  }

  function handleUpdateToy(updatedToy) {
    const updatedToys = toys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );
    setToys(updatedToys);
  }

  return (
    <div>
      <ToyForm onAddToy={handleAddToy} />
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onDeleteToy={handleDeleteToy}
          onUpdateToy={handleUpdateToy}
        />
      ))}
    </div>
  );
}

export default App;