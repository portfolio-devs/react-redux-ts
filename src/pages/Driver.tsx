import { loggedType, username } from "../types/variables"

const Driver = ({ user }: { user: username }) => {
  const logged: loggedType = {
    userName: 'John Doe',
    userClass: 'driver'
  }
  sessionStorage.setItem('logged1', JSON.stringify(logged))
  return (
    <div>
      DRIVER NAME: {user.userName}
      DRIVER CLASS: {user.userClass}
    </div>
  )
}

export default Driver
