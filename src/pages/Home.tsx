import { Link } from "react-router-dom";

const Home = () => {
  sessionStorage.setItem('username', 'john doe')
  return (
    <>
      <h1>HELLO FROM HOME!</h1>
      <Link to="/counter">Click Me</Link>
    </>
  )
};

export default Home;
