import React from 'react'

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

export default function HotelDescription() {
  return (
    <>
        <h1>HOTEL DESCRIPTION</h1>

      <table border={2}>
        <thead>
         
            <th>thumbnail Image</th>
            <th>name of the hotel</th>
            <th>Long Description</th>
            <th>city</th>
            <th>Pool ?</th>
            <th>Experience Level</th>
            <th>Price</th>
            <th>Action</th>
        </thead>
        <tbody>
          <tr>
            {mockData.map(item => {
                <>

                <td>{item.thumbnail_image}</td>
                <td>{item.hotel_name}</td>
                <td>{item.description}</td>
                <td>{item.city}</td>
                <td>{item.pool}</td>
                <td>{item.experience}</td>
                <td>{item.price}</td>
                <td><button>Book Now</button></td>
                </>
            })}
          </tr>
        </tbody>
      </table>
    </>
  )
}
