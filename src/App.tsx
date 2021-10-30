import './App.scss'
import Login from './pages/Login';
import DynamicHome from './pages/DynamicHome';

const App = () => {
  const logged = JSON.parse(sessionStorage.logged)
  return (
    <>
      {
        logged
          ? <DynamicHome user={logged} />
          : <Login />
      }
    </>
  );
}

export default App;