import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllGames, getGamesByCity } from '../../redux/games/gameThunk';
import { CardItem } from '../../components/card/CardItem';
import { Loading } from '../../components/loading/Loading';
import './GamePage.css';

function GamePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isLoading, games, isError } = useSelector((state) => ({
    ...state.games
  }));

  useEffect(() => {
    if(id){
      dispatch(getGamesByCity(id));
    }else {
      dispatch(getAllGames());
    }
  }, [dispatch, games, id]);

  console.log("game",games)

  const navigateToFormGame = () => {
    navigate('/createGame');
  };


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
        <ul className="divide-y divide-gray-100" >                     
          {games.map((game) => (
            <CardItem key={game.id_game} data={game} isPlay={true}></CardItem>
          ))}
        </ul>
      ) : 
      <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
        No games
      </div> }

      <button type="button" 
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={navigateToFormGame}>Add New Game</button>
    </div>
  )
}

export {GamePage}