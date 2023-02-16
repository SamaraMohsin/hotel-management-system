import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import {Checkbox} from "react"

export default function SearchForm() {
  const [city, setCity] = useState("");
  const [experienceLevel, setExpLevel] = useState("");
  const [pool, setPool] = useState(false);

  function handleCity(e) {
    setCity(e.target.value);
  }

  function handleExpLevel(e) {
    setExpLevel(e.target.value);
  }

  function handlePool(e) {
    setPool(e.target.value);
  }

  const navigate = useNavigate()


  
  function handleSearch(){
    navigate('/hotels')
  }

  return (
    <div>
      <form>
      <div>
        <select value={city} onChange={handleCity}>
          <option value="" selected disabled>
            City
          </option>
          <option value="karachi">karachi</option>
          <option value="Lahore">Lahore</option>
          <option value="Islamabad">Islamabad</option>
        </select>
      </div>

      <div>
        <select value={experienceLevel} onChange={handleExpLevel}>
          <option value="" selected disabled>
            Experience
          </option>
          <option value="Budget">Budget</option>
          <option value="Business">Business</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>

      <div>
        <input
          type="checkbox"
          value="Yes"
          checked={pool === "Yes"}
          onChange={handlePool}
        />
        <span>Yes</span>
        <input
          type="checkbox"
          value="No"
          checked={pool === "No"}
          onChange={handlePool}
        />
        <span>No</span>
      </div>

      <button onClick={handleSearch}>
        Search
      </button>
      </form>
    </div>
  );
}
