import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { headingFont } from '../theme'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import "./WeatherCard.scss"


const WeatherCard = ({ weatherLocation, weatherCurrent, type }) => {

  const date = new Date(weatherLocation?.localtime).toLocaleDateString('fr-CH');

  return (
    <Grid
      className={type}
      sx={{
        borderRadius: "20px",
        border: "1px solid #E7E7E7"
      }}
    >
      <Box
        width="280px"
        height="340px"
        padding="40px"
        display='flex'
        flexDirection='column'
        justifyContent='center'
      >
        <ThemeProvider theme={headingFont}>
          <Typography
            variant='h1'
            sx={{
              marginBottom: '44px',
              color: "secondary.main",
              textAlign: "center"
            }}
          >
            {weatherCurrent?.temp_c}℃
          </Typography>
        </ThemeProvider>
        <Box>
          <Typography
            sx={{
              marginBottom: '11px',
              color: "grey.main"
            }}>
            {weatherCurrent?.wind_kph}km/h
          </Typography>
          <Typography
            sx={{
              marginBottom: '11px',
              color: "grey.main"
            }}>
            {date}
          </Typography>
          <Typography
            variant='h5'
            paragraph
            sx={{
              fontWeight: 600,
              marginBottom: '11px',
              color: "primary.main",
              lineHeight: 1
            }}>
            {weatherLocation?.name}
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
}

export default WeatherCard