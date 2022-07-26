import React from "react";



function ReadOnlyRow({nData, handleEditClick, handleDeleteClick}) {

  return(
      <tr>
        <td>{nData.calories}</td>
        <td>{nData.protein}</td>
        <td>{nData.fat}</td>
        <td>{nData.sugar}</td>
        <td>{nData.carbs}</td>
        <td>
          <button type="button" onClick={(event) => handleEditClick(event, nData)}>Edit</button>
          <button type="button" onClick={() => handleDeleteClick(nData.id)}>Delete</button>
        </td>
      </tr>
  )
}

export default ReadOnlyRow