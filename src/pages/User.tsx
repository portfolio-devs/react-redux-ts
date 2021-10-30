import { loggedType } from "../types/variables"

const User = () => {
  const logged: loggedType = {
    userName: 'Jane Doe',
    userClass: 'user'
  }
  sessionStorage.setItem('logged2', JSON.stringify(logged))
  return (
    <div>USER
    </div>
  )
}

export default User
