
import React, { useState } from "react";
import axios from "axios"







function Search() {

  const [ displayData, setDisplayData ] = useState({});
  
  
  const [ searchNutriData, setSearchNutriData ] = useState('')

  const params = {
    api_key: 'EURA280GwJjiXZi1vUc0vOy5GzOS4e1S0oNl0d9h',
    query: searchNutriData,
    dataType: ["Survey (FNDDS)"],
    pagesize: 3,
  
  };
  
  const api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dataType)}&pageSize=${encodeURIComponent(params.pagesize)}`
  






  

  const getData = (e) => {
    e.preventDefault()
    axios.get(api_url)

    .then(response => setDisplayData(response.data.foods[0]))
    
    
    .catch(error => console.log(error))

  

  }


  console.log(displayData)

  return(
    <div className="search-bar">
      <form>
        <input onChange={e => setSearchNutriData(e.target.value)} type="text" className="search-input"/>
        <button  onClick={e => getData(e)} className="search-button">search</button>
      </form>
      <div>
        {JSON.stringify(displayData) !== '{}' ? 
        
        <div className="search-results-display">
          <p>Calories: {displayData.foodNutrients[3].value}</p>
          <p>Protein: {displayData.foodNutrients[0].value}</p>
          <p>Fat: {displayData.foodNutrients[1].value}</p>
          <p>Sugar: {displayData.foodNutrients[4].value}</p>
          <p>Carbs: {displayData.foodNutrients[2].value}</p>
        </div> 
        
        : 
        <><p>Search anything</p></>}

      </div>

    </div>
  )
}





export default Search