import React, { useState } from "react";
import { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
  fetch("http://localhost:3001/toys")
    .then((res) => res.json())
    .then((data) => setToys(data));
}, []);

{toys.map((toy) => (
  <ToyCard key={toy.id} toy={toy} />
))}

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer />
    </>
  );
}

function handleAddToy(newToy) {
  setToys([...toys, newToy]);
}
<ToyForm onAddToy={handleAddToy} />

function handleUpdateToy(updatedToy) {
  const updatedToys = toys.map((toy) =>
    toy.id === updatedToy.id ? updatedToy : toy
  );

  setToys(updatedToys);
}

export default App;
