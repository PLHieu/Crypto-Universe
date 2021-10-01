import { Autocomplete, Box, CircularProgress, TextField } from "@mui/material"
import React, { useEffect, useState } from "react"
import { News } from "../components"
import { useQuery } from "react-query"
import { GetCurrencies } from "../services/cryptoApi"

const New = () => {
  const [keyword, setKeyword] = useState("crypto")
  const { data, isLoading: currenciesLoading } = useQuery(
    "Currencies",
    GetCurrencies
  )
  const [currencies, setCurrencies] = useState([])

  useEffect(() => {
    setCurrencies(
      data?.data?.coins.map((coin, i) => ({
        iconUrl: coin.iconUrl,
        name: coin.name,
        value: coin.name,
      }))
    )
  }, [data])

  if (currenciesLoading) {
    return <CircularProgress />
  }

  return (
    <>
      <Autocomplete
        sx={{ width: 300 }}
        options={currencies || []}
        autoHighlight
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img loading="lazy" width="20" src={option.iconUrl} alt="" />
            {option.name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a currency"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
        onChange={(e, newValue) =>
          setKeyword(newValue ? newValue.name : "crypto")
        }
      />
      <News keyword={keyword}></News>
    </>
  )
}

export default New
