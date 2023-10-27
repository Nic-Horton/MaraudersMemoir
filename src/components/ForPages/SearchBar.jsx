import React from 'react'
import { Search } from "@mui/icons-material";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const searchTypes = [
  {
    value: "characters",
    label: "Characters",
  },
  {
    value: "spells",
    label: "Spells",
  },
];

function SearchBar() {
  const navigate = useNavigate();
  const [homeSearch, setHomeSearch] = useState('');
  const [searchType, setSearchType] = useState("characters");

  const handleChangeSearch = (event) => {
    const search = event.target.value;
    setHomeSearch(search);
  };

  const handleChangeSearchType = (e) => {
    const searchType = e.target.value;
    setSearchType(searchType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${searchType}?q=${encodeURIComponent(homeSearch)}`)
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        gap: 1,
        justifyContent: "center",
        width: {
          xs: "100%",
        },
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: {
          xs: "stretch",
          md: "stretch",
        },
      }}
    >
      <TextField
        id="outlined-type-selector"
        variant="outlined"
        type='search'
        color="secondary"
        label="Search"
        value={homeSearch}
        onChange={handleChangeSearch}
        sx={{
          '& fieldset': {
            borderColor: (theme) => theme.palette.secondary.main
          },
          '&:hover fieldset': {
            borderColor: (theme) => theme.palette.secondary.main.dark
          },
            '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & input:-webkit-autofill:active': {
              'WebkitBackgroundClip': 'text',
              'WebkitTextFillColor': (theme) => theme.palette.secondary.main,
              'transition': 'background-color 5000s ease-in-out 0s',
              'boxShadow': 'inset 0 0 20px 20px #23232329',
            },
        }}
        InputLabelProps={{
          sx: {
            fontFamily:'Lugrasimo',
          },}}
          InputProps={{
            sx: {
              color:'secondary.dark',
              fontFamily:'Lugrasimo'
            },}}
      />
      
      <TextField
        id="outlined-type-selector"
        variant="outlined"
        color="secondary"
        select
        label="Type"
        value={searchType}
        onChange={handleChangeSearchType}
        sx={{
          '& .MuiSelect-select': {
            fontFamily: 'Lugrasimo',
          },
          '& fieldset': {
            borderColor: (theme) => theme.palette.secondary.main
          },
          '& .MuiSelect-icon': {
            color: 'secondary.main'
         }
        }}
        InputLabelProps={{
          sx: {
            fontFamily:'Lugrasimo',
          },}}
        InputProps={{
          sx: {
            color:'secondary.main'
          },}}
      >
        {searchTypes.map((type) => (
          <MenuItem key={type.value} value={type.value} sx={{fontFamily:'Lugrasimo'}}>
            {type.label}
          </MenuItem>
        ))}
      </TextField>
      <Button
        size="large"
        type="submit"
        onClick={handleSubmit}
        variant="contained"
        aria-label="search"
        color="secondary"
      >
        {<Search color='primary'/>}
      </Button>
    </Box>
  )
}

export default SearchBar

// input:-webkit-autofill,
// input:-webkit-autofill:hover, 
// input:-webkit-autofill:focus, 
// input:-webkit-autofill:active{
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: #ffffff;
//     transition: background-color 5000s ease-in-out 0s;
//     box-shadow: inset 0 0 20px 20px #23232329;
// }