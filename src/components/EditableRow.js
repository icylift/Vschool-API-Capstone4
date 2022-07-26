import React from "react";



function EditableRow({ editFormData, handleEditFormChange, handleCancelClick }) {

  return(
      <tr>
        <td>
          <input 
              type="text" 
              name="calories"
              required="required"
              placeholder="enter calories"
              value={editFormData.calories}
              onChange={handleEditFormChange}
            />
        </td>
        <td>
          <input 
              type="text" 
              name="protein"
              required="required"
              placeholder="enter protein"
              value={editFormData.protein}
              onChange={handleEditFormChange}
            />
        </td>
        <td>
          <input 
              type="text" 
              name="fat"
              required="required"
              placeholder="enter fat"
              value={editFormData.fat}
              onChange={handleEditFormChange}
            />
        </td>
        <td>
          <input 
              type="text" 
              name="sugar"
              required="required"
              placeholder="enter sugar"
              value={editFormData.sugar}
              onChange={handleEditFormChange}
            />
        </td>
        <td>
          <input 
              type="text" 
              name="carbs"
              required="required"
              placeholder="enter carbs"
              value={editFormData.carbs}
              onChange={handleEditFormChange}
            />
        </td>
        <td>
          <button type="submit">Save</button>
          <button type="button" onClick={handleCancelClick}>Cancel</button>
        </td>
      </tr>
  )
}

export default EditableRow