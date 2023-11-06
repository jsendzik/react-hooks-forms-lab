import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    setSearchText(event.target.value)
  }

  function handleAdd(event) {
 console.log(event)
    const newItem = {
      name: event.name,
      category: event.category,
      id: event.name
    }
    onItemFormSubmit(newItem);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && searchText === "") return true;

    const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
    const textMatch = item.name.toLowerCase().includes(searchText.toLowerCase());

    return categoryMatch && textMatch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onSubmit={handleAdd} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch} searchText={searchText}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
