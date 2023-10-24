import React from 'react'
import DataTable from '../DataTable';
import AccordionJSX from '../Accordion';

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

    const accordionInfo = [
      {
        name: "Alias Names",
        value: alias_names,
      },
      {
        name: "Wands",
        value: wands,
      },
      {
        name: "Jobs",
        value: jobs,
      },
      {
        name: "Romances",
        value: romances,
      },
      {
        name: "Family Members",
        value: family_members,
      },
    ];
  
  return(
    <>
      <img src={image} alt={name} />
      <DataTable tableInfo={tableInfo}/>
      <AccordionJSX accordionInfo={accordionInfo}/>
      <a href={wiki}>Wiki</a>
    </>
  )
}

export default Details