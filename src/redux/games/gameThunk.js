import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:4000/api";

export const getAllGames = createAsyncThunk("game/getListOfGames", async () => {
  try {
    const data = await axios.get(`${baseUrl}/game/getListOfGames`)
    if(data.status === 200){
      return data.data.items;
    }
  } catch (err) {
    throw new Error(err.response);
  }
  
});

export const getGamesByCity = createAsyncThunk("game/getGameByCity", async (id) => {
  try {
    const data = await axios.get(`${baseUrl}/game/getGameByCity/${id}`)
    if(data.status === 200){
      return data.data.items;
    }
  } catch (err) {
    throw new Error(err.response);
  }
  
});

export const createGame = createAsyncThunk("game/createGame", async ({name,location,img,game_date,size,time_game,description,price,id_city}) => {
  const gameModel = {
    name: name,
    location: location,
    img: img,
    game_date: game_date,
    size: size,
    time_game: time_game,
    description: description,
    price: price,
    id_city: id_city,
    isActive: true
  }
  try {
    const data = await axios.post(`${baseUrl}/game/createGame`, gameModel)
    if(data.status === 200){
      return data.data.items;
    }
  } catch (err) {
    throw new Error(err.response);
  }
});


export const updateGame = createAsyncThunk("game/updateGame", async (gameModel) => {
  try {
    const data = await axios.post(`${baseUrl}/game/updateGame`,gameModel)
    if(data.status === 200){
      return data.data.items;
    }
  } catch (err) {
    throw new Error(err.response);
  }
});

export const filterGame = createAsyncThunk("game/filterGameByName", async (name) => {
  try {
    const data = await axios.get(`${baseUrl}/game/filterGameByName/${name}`)
    if(data.status === 200){
      return data.data.items;
    }
  } catch (err) {
    throw new Error(err.response);
  }
});

export const getGameById = createAsyncThunk("game/getGameById", async (id) => {
  try {
    const data = await axios.get(`${baseUrl}/game/getGameById/${id}`);
    if(data.status === 200){
      return data.data.items;
    }
  } catch (err) {
    throw new Error(err.response);
  }
});