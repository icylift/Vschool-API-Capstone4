
import React, { useState, Fragment } from "react";
import data from "../mock-data.json";
import { nanoid } from "nanoid"
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";





function Tracker() {
  // This is to hold the meal data -----------------------
  const [nutriData, setNutriData] = useState(data);

  const [addFormData, setAddFormData] = useState({
    calories: '',
    protein: '',
    fat: '',
    sugar: '',
    carbs: ''
  });

  // this is edit the state for the form -----------------------------
  const [editFormData, setEditFormData] = useState({
    calories: '',
    protein: '',
    fat: '',
    sugar: '',
    carbs: ''
  });

  const [editDataId, setEditDataId] = useState(null);

  // This event handler is to add new meal data -------------------------------
  const handleAddFormChange = (event) => {
    event.preventDefault();
    
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  }

  // this event handler is for the edit option ------------------------------
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const {name , value} = event.target
    setEditFormData(prev => {
      return {
        ...prev,
        [name]: value
      }

    })
    // const fieldName = event.target.getAttribute('name');
    // const fieldValue = event.target.value;
    
    // const newFormData = { ...editFormData };
    // newFormData[ fieldName ] = fieldValue;

    // setEditFormData(newFormData)

  };

  // This event handler is for the form submit --------------------------------
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newMeal = {
      id: nanoid(),
      calories: addFormData.calories,
      protein: addFormData.protein,
      fat: addFormData.fat,
      sugar: addFormData.sugar,
      carbs: addFormData.carbs
    };

    const newMeals = [...nutriData, newMeal];
    setNutriData(newMeals);
  };

  // This event handler is for the save button when you edit the form ---------------------------
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editNewMeal = {
      id: editDataId,
      calories: editFormData.calories,
      protein: editFormData.protein,
      fat: editFormData.fat,
      sugar: editFormData.sugar,
      carbs: editFormData.carbs
    }

    const newMeal = [...nutriData];

    const index = nutriData.findIndex((nData) => nData.id === editDataId)

    newMeal[index] = editNewMeal;

    setNutriData(newMeal)
    setEditDataId(null)


  }

  // This is to handle the edit click -----------------------------------------
  const handleEditClick = (event, nData) => {
    event.preventDefault();
    setEditDataId(nData.id)

    const formValues = { 
      calories: nData.calories,
      protein: nData.protein,
      fat: nData.fat,
      sugar: nData.sugar,
      carbs: nData.carbs
    }

    setEditFormData(formValues);
  }
// This event handler takes care of the cancel button -----------------
  const handleCancelClick = () => {
    setEditDataId(null);
  }

  // This is for the delete button 
  const handleDeleteClick = (nDataId) => {
    const newMeal = [...nutriData];

    const index = nutriData.findIndex((nData) => nData.id === nDataId)

    newMeal.splice(index, 1);

    setNutriData(newMeal);
  }


  return(
    <div className="tracker-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
        <thead>
          <tr>
            <th>Calories</th>
            <th>Protein</th>
            <th>Fat</th>
            <th>Sugar</th>
            <th>Carbs</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        
          {nutriData.map((nData) => (
            <Fragment>
              
              {editDataId === nData.id ? (
              
              <EditableRow 
                editFormData={editFormData} 
                handleEditFormChange={handleEditFormChange} 
                handleCancelClick={handleCancelClick}
              />
              ) : (
              <ReadOnlyRow 
                nData={nData}
                handleEditClick={handleEditClick}
                handleDeleteClick={handleDeleteClick}
              />
              )}
            </Fragment>

          ))}

        </tbody>
      </table>
      </form>

      <h2>Add another meal</h2>
        <form className="tracker-form" onSubmit={handleAddFormSubmit} >
          <input 
            type="text" 
            name="calories"
            required="required"
            placeholder="enter calories"
            onChange={handleAddFormChange}
          />
          
          <input 
            type="text" 
            name="protein"
            required="required"
            placeholder="enter protein"
            onChange={handleAddFormChange}
          />
            
          <input 
            type="text" 
            name="fat"
            required="required"
            placeholder="enter fat"
            onChange={handleAddFormChange}
          />
            
          <input 
            type="text" 
            name="sugar"
            required="required"
            placeholder="enter sugar"
            onChange={handleAddFormChange}
          />
            
          <input 
            type="text" 
            name="carbs"
            required="required"
            placeholder="enter carbs"
            onChange={handleAddFormChange}
          />
          <button type="submit" className="tracker-add-btn">Add</button>
        </form>
    </div>
  )
}





export default Tracker


