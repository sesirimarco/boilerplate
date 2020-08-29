import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { isLogged } from './redux/actions'
import './App.scss';

function App() {
  const user = useSelector(state => state.auth.user);
  const isLoading = useSelector(state => state.auth.isLoading);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(isLogged());
  }, []);
  return (
    <div className="App container pt-4">
      <h1 className="text-center mb-4">Boilerplate</h1>
      <div className="col-6 text-center">
        <div className="form-row mt-3">
          <input className="form-control col" type="text" />
          <button className="btn btn-custom-color ml-2">Custom button</button>
        </div>
      </div>
        {
          isLoading && <Loading isLoading={isLoading}/>
        }
        { 
          user && <p> USER: {user.username}</p>
        }
        
    </div>
  );
}

const Loading = ({isLoading}) => {
  
  return ( 
    <>
      {
        isLoading && <p>Cargando...</p>
      }
    </>
  );
};
export default App;
