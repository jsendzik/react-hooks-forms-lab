import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onSubmit }) {
  const [newItem, setNewItem] = useState({
    id: uuid(),
    name: "",
    category: "Produce"
  });

function handleInputChange(e) {
  const { name, value } = e.target;
  setNewItem({
    ...newItem, [name]: value
  })
}

function handleSubmit(e) {
  e.preventDefault();
  onSubmit(newItem);
  setNewItem({ name: "", category: "Produce"})
}

  return (
    <form className="NewItem" onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" name="name" value={newItem.name} onChange={handleInputChange} />
      </label>

      <label>
        Category:
        <select name="category" value={newItem.category} onChange={handleInputChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
