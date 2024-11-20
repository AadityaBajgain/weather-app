import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { geoUrl,options } from '../../Api.js';
const Search = ({onSearchChange}) => {

    const [search,setSearch] = useState(null);

    function handleOnChange(searchData){
        setSearch(searchData);
        onSearchChange(searchData); 
    }
    async function loadOptions(inputValue){
        try {
            const response = await fetch(`${geoUrl}/cities?namePrefix=${inputValue}`, options);
            const result = await response.json();
            // console.log(result);
            return {
                options: result.data.map((city)=>{
                    return{
                        value:`${city.latitude} ${city.longitude}` ,
                        label: `${city.name}, ${city.countryCode}`,
                    }
                })
            };
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <AsyncPaginate
    placeholder="Search for city"
    debounceTimeout={500}
    value={search}
    onChange={handleOnChange}
    loadOptions={loadOptions}
    />
      
   
  )
}

export default Search
