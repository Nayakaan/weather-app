import React, { useEffect, useState } from 'react'
import { fetchFromAPI } from "../utils/fetchFromApi"
import WeatherCard from './WeatherCard'
import { Grid } from '@mui/material'

const WeatherContainer = () => {
  const [countryOne, setCountryOne] = useState(null)
  const [countryTwo, setCountryTwo] = useState(null)
  const [countryThree, setCountryThree] = useState(null)

  useEffect(() => {
    fetchFromAPI('gdansk').then((data) => setCountryOne(data))
    fetchFromAPI('warsaw').then((data) => setCountryTwo(data))
    fetchFromAPI('cracow').then((data) => setCountryThree(data))
  }, [])

  return (
    <Grid
      height='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      px={4}
    >
      <Grid
        container
        gap={5}
        justifyContent="center"
      >
        <WeatherCard type="cardFilled" weatherLocation={countryOne?.location} weatherCurrent={countryOne?.current} />
        <WeatherCard type="cardElevated" weatherLocation={countryTwo?.location} weatherCurrent={countryTwo?.current} />
        <WeatherCard weatherLocation={countryThree?.location} weatherCurrent={countryThree?.current} />
      </Grid>
    </Grid>
  )
}

export default WeatherContainer