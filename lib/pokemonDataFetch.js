import React from 'react'

export default async function pokemonDataFetch(link) {
  try{
    const data = await fetch(link);
    const response = await data.json();
    
    return (
      response
    )
  } catch (error) {
    console.log(error)
  }
}
