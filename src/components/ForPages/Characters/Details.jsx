import React from 'react'
import DataTable from '../DataTable';

function Details({attributes}){

  const {
    name, image, alias_names, blood_status, born, died, 
    house, patronus, animagus, boggart, wands,
    eye_color, hair_color, gender, species, skin_color,
    nationality, family_members, jobs, romances, wiki,
  } = attributes;

  const tableInfo = [
      {
        name: "Name",
        value: name,
      },
      {
        name: "Blood status",
        value: blood_status,
      },
      {
        name: "House",
        value: house,
      },
      {
        name: "Born",
        value: born,
      },
      {
        name: "Died",
        value: died,
      },
      {
        name: "Species",
        value: species,
      },
      {
        name: "Animagus",
        value: animagus,
      },
      {
        name: "Gender",
        value: gender,
      },
      {
        name: "Hair color",
        value: hair_color,
      },
      {
        name: "Eye color",
        value: eye_color,
      },
      {
        name: "Skin color",
        value: skin_color,
      },
      {
        name: "Nationality",
        value: nationality,
      },
      {
        name: "Patronus",
        value: patronus,
      },
      {
        name: "Boggart",
        value: boggart,
      },
    ];
  
  return(
    <>
      <img src={image} alt={name} />
      <DataTable tableInfo={tableInfo}/>
    </>
  )
}

export default Details