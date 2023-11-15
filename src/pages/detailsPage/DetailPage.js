import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getGameById } from '../../redux/games/gameThunk';
import { Loading } from '../../components/loading/Loading'
import './DetailPage.css';

function DetailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, games, isError } = useSelector((state) => ({
    ...state.game
  }));

  const navigateToFormGame = (id) => {
    dispatch(getGameById(id));
    navigate(`/createGame`);
  }

  return(
    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
     { isLoading ? (
        <Loading></Loading>
      ) : null}
      
      {isError ? (
        <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
          {isError}
        </div>
      ) : null}

      {!isLoading && games ? (
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{games.name}</h5>
          <a href="#">
            <img className="rounded-t-lg" src={games.img} alt={games.name} />
          </a>
          <div className="p-5">
            <h6 className="mb-2 text-2xl font-bold tracking-tight">{games.location}</h6>
            <hr></hr>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{games.game_detail.description}</p>
            <p className="mb-3 font-normal dark:text-gray-400">Price: {games.game_detail.price}</p>
            <p className="mb-3 font-normal dark:text-gray-400">Time Game: {games.game_detail.time_game}</p>
            <p className="mb-3 font-normal dark:text-gray-400">Size: {games.game_team.size}</p>
          </div>
        </div>
      ) : 
      <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
        No game selected
      </div> }
     <button type="button" 
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={() => navigateToFormGame(games.id_game)}>Edit Game</button>
    </div>
  )
}

export {DetailPage}