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
        label="Search"
        value={homeSearch}
        onChange={handleChangeSearch}
      />
      <TextField
        id="outlined-type-selector"
        variant="outlined"
        select
        label="Type"
        value={searchType}
        onChange={handleChangeSearchType}
      >
        {searchTypes.map((type) => (
          <MenuItem key={type.value} value={type.value}>
            {type.label}
          </MenuItem>
        ))}
      </TextField>
      <Button
        size="large"
        type="submit"
        onClick={handleSubmit}
        variant="outlined"
        aria-label="search"
        startIcon={<Search />}
      >
        Search
      </Button>
    </Box>
  )
}

export default SearchBar