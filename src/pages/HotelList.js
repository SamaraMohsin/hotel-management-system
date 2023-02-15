import React, { useState } from "react";
import HotelDescription from "./HotelDescription";

const mockData = [
    {
        id: 1,
        thumbnail_image: "img1",
        hotel_name: "PC Hotel",
        description: "PC hotel short description",
        city: "Karachi",
        pool: "Yes",
        experience: "Luxuary",
        price: 5000,
      },
      {
        id: 2,
        thumbnail_image: "img2",
        hotel_name: "DC Hotel",
        description: "DC hotel short description",
        city: "Turbat",
        pool: "No",
        experience: "Business",
        price: 3000,
      },
      {
        id: 3,
        thumbnail_image: "img3",
        hotel_name: "GC Hotel",
        description: "GC hotel short description",
        city: "Islamabad",
        pool: "Yes",
        experience: "Budget",
        price: 1000,
      }    
];

export default function HotelList() {

  const [navigate, setNavigate] = useState(false);

  function handleNavigation(){
    setNavigate(true);

    // if (setNavigate){
    //   <HotelDescription/>
    // }
  }


  return (
    <>
    <h1>HOTELS LIST</h1>

      <table border={2}>
        <thead>
            <th>Item</th>
            <th>thumbnail Image</th>
            <th>name of the hotel</th>
            <th>shortDescription</th>
            <th>city</th>
            <th>Pool ?</th>
            <th>Experience Level</th>
            <th>Price</th>
            <th>Action</th>
        </thead>
        <tbody>
        
            {mockData.map(item => {
              return (
           
                <tr>
                
                  <td>{item.id}</td>
                <td>{item.thumbnail_image}</td>
                <td><a role = "button" onClick={handleNavigation}>{item.hotel_name}</a></td>
                <td>{item.description}</td>
                <td>{item.city}</td>
                <td>{item.pool}</td>
                <td>{item.experience}</td>
                <td>{item.price}</td>
                <td><button>Book Now</button></td>

           
                </tr>
              

              )
            })}
       
        </tbody>
      </table>
      {navigate ? <HotelDescription /> : null}
    </>
  );
}
