import { useEffect, useState } from "react";
import Header from "./Header";
import ToyContainer from "./ToyContainer";
import ToyForm from "./ToyForm";

function App() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  function handleAddToy(newToy) {
    setToys((prevToys) => [...prevToys, newToy]);
  }

  function handleDeleteToy(id) {
    setToys((prevToys) => prevToys.filter((toy) => toy.id !== id));
  }

  function handleUpdateToy(updatedToy) {
    setToys((prevToys) =>
      prevToys.map((toy) =>
        toy.id === updatedToy.id ? updatedToy : toy
      )
    );
  }

  return (
    <div>
      <Header />
      <ToyForm onAddToy={handleAddToy} />
      <ToyContainer
        toys={toys}
        onDeleteToy={handleDeleteToy}
        onUpdateToy={handleUpdateToy}
      />
    </div>
  );
}

export default App;