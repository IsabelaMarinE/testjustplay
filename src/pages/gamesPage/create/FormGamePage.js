import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { updateGame, createGame, getGameById } from '../../../redux/games/gameThunk';
import { getListCities } from '../../../redux/cities/cityThunk';
import { Loading } from '../../../components/loading/Loading';
import '../GamePage.css';

function FormGamePage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { id } = useParams();

  const [id_game, setIdGame] = useState("")
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [img, setImg] = useState("");
  const [game_date, setGameDate] = useState("");
  const [size, setSize] = useState("");
  const [time_game, setTimeGame] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [id_city, setCity] = useState("");

  const { isLoading, games, isError } = useSelector((state) => ({
    ...state.games,
  }));

  const { cities } = useSelector((state) => ({
    ...state.cities,
  }));

  useEffect(() => {
    if(id !== undefined){
      dispatch(getGameById(id));
    }
    dispatch(getListCities());
  }, []);

  useEffect(() => {
    if(games){
      setIdGame(games.id_game)
      setName(games.name);
      setLocation(games.location);
      setImg(games.img);
      setGameDate(games.game_date);
      setSize(games.size);
      setTimeGame(games.time_game);
      setDescription(games.description);
      setPrice(games.price);
      setCity(games.id_city);
    }
  }, [games]);

  const handleSubmitUpdated = (event) => {
    event.preventDefault();
    if(games){
      dispatch(updateGame({name,location,img,game_date,size,time_game,description,price,id_city}));
    } else {
      dispatch(createGame({id_game,name,location,img,game_date,size,time_game,description,price,id_city}));
    }
    navigate("/gamepage");
  };

  return(
    <div className="isolate bg-white px-6 sm:py-32 lg:px-6">
      { isLoading ? (
        <Loading></Loading>
      ) : null}
      
      {isError ? (
        <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
          {isError}
        </div>
      ) : null}

      {!isLoading ? (
        <div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Game Details</h2>
          </div>
          <form onSubmit={handleSubmitUpdated} className="mx-auto mt-16 max-w-xl sm:mt-20">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label for="name" className="block text-sm font-semibold leading-6 text-gray-900">Name</label>
                <div className="mt-2.5">
                  <input type="text" 
                  name="name" 
                  id="name" 
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
                </div>
              </div>
              <div>
                <label for="location" className="block text-sm font-semibold leading-6 text-gray-900">Location</label>
                <div className="mt-2.5">
                  <input type="text" 
                  name="location" 
                  id="location" 
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)} />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label for="img" className="block text-sm font-semibold leading-6 text-gray-900">Imagen</label>
                <div className="mt-2.5">
                  <input type="text" 
                  name="img" 
                  id="img" 
                  placeholder="url of img" 
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label for="game_date" className="block text-sm font-semibold leading-6 text-gray-900">Game Date</label>
                <div className="mt-2.5">
                  <input type="date" 
                  name="game_date" 
                  id="game_date"  
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={game_date}
                  onChange={(e) => setGameDate(e.target.value)} />
                </div>
              </div>
              <div>
                <label for="time_game" className="block text-sm font-semibold leading-6 text-gray-900">Playing Time</label>
                <div className="mt-2.5">
                  <input type="text" 
                  name="time_game" 
                  id="time_game"  
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={time_game}
                  onChange={(e) => setTimeGame(e.target.value)} />
                </div>
              </div>
              <div>
                <label for="size" className="block text-sm font-semibold leading-6 text-gray-900">Team Size</label>
                <div className="mt-2.5">
                  <input type="text" 
                  name="size" 
                  id="size" 
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={size}
                  onChange={(e) => setSize(e.target.value)} />
                </div>
              </div>
              <div>
                <label for="price" className="block text-sm font-semibold leading-6 text-gray-900">Game Price</label>
                <div className="mt-2.5">
                  <input type="text" 
                  name="price" 
                  id="price" 
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)} />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label for="d_city" className="block text-sm font-semibold leading-6 text-gray-900">City</label>
                <div className="relative border border-gray-300 text-gray-800 bg-white shadow-lg">
                  <select class="appearance-none w-full py-1 px-2 bg-white" name="d_city" id="d_city" onChange={(e) => setCity(e.target.value)}>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id_city}>{city.name}</option>
                    ))}
  
                  </select>
                  <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
                      <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label for="description" className="block text-sm font-semibold leading-6 text-gray-900">Description</label>
                <div className="mt-2.5">
                  <textarea name="description" 
                  id="description" 
                  rows="4" 
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-10">
            { games ? (
              <button type="submit" 
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update</button>
            ) : 
            <button type="submit" 
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>
            }
            </div>
          </form>
        </div>
      ) : null }
    </div>
  )
}

export {FormGamePage}