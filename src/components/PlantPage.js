import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, handleNewItem}) {
  const [search, setSearch] = useState("")

  const plantList= 
    plants.filter(plant => {
      if (search === ""){
        return plant
      }
      else {
        return plant.name.toUpperCase().includes(search.toUpperCase())
      }      
    })
  

  function onNewItem(plant){
    handleNewItem(plant)
  }
  
  function onSearch(search){
    setSearch(search)
  }
  
  return (
    <main>
      <NewPlantForm onNewItem={onNewItem}/>
      <Search onSearch={onSearch}/>
      <PlantList plants={plantList}/>
    </main>
  );
}

export default PlantPage;
