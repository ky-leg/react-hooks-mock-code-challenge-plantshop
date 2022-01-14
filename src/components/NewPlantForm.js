import React, {useState} from "react";

function NewPlantForm({onNewItem}) {

  const [formData, setFormdata] = useState({
    name: "",
    image: "",
    price: "",
  })

  function handleChange(e){
    console.log(e.target.value)
      setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handlePriceChange(e){
    // const price = parseInt(e.target.value)
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    onNewItem(formData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} placeholder="Plant name" onChange={handleChange}/>
        <input type="text" name="image" value={formData.image} placeholder="Image URL" onChange={handleChange} />
        <input type="number" name="price" value={formData.price} step="0.01" placeholder="Price" onChange={handlePriceChange} />
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
