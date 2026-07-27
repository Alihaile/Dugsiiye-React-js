import { useState } from 'react'
import UsersList from './UsersList';


function App() {
  const [users, setUsers] = useState([
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "Shanna@melissa.tv"
    },
    {
      "id": 3,
      "name": "Patricia Lebsack",
      "email": "Julianne.OConner@kory.org",
    },
    {
      "id": 4,
      "name": "Clementine Bauch",
      "email": "Nathan@yesenia.net",
    }]);

  return (
    <>
      <h1>Users List Using Component</h1>
      <UsersList users={users} />
    </>
  )

}

export default App
