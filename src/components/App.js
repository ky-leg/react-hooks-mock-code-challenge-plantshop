import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState()

  useEffect(() =>{
    fetch(`http://localhost:6001/plants`)
    .then(r => r.json())
    .then(r => setPlants(r))
  }, [])

  function handleNewItem(newPlant){
    console.log(typeof newPlant.name, typeof newPlant.image, typeof newPlant.price)
    fetch(`http://localhost:6001/plants`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": newPlant.name,
        "image": newPlant.image,
        "price": newPlant.price
      })
    })
    .then(r => r.json())
    .then(newPlant => setPlants([...plants, newPlant]))
  }

  console.log(plants)

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} handleNewItem={handleNewItem}/>
    </div>
  );
}

export default App;
