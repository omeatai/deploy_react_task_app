import React, { useRef } from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <form onSubmit={handleSubmit} className="addForm">
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        ref={inputRef}
        id="addItem"
        placeholder="Add Item"
        autoFocus
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        arai-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
