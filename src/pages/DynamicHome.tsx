import { componentsType, username } from '../types/variables';
import Driver from './Driver';
import User from './User';

const DynamicHome = ({ user }: { user: username }) => {


  const components: componentsType = {
    driver: Driver,
    user: User
  };
  const Home = components[user?.userClass]
  console.log(Home)
  return <Home user={user} />
}

export default DynamicHome
