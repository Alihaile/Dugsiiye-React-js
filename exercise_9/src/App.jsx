import { useState, useEffect, useRef } from 'react'


function App() {

  const [userName, setUserName] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  document.title = "Exercise 9";
  let apiUrl = 'https://api.github.com/users';

  let fetchData = async (user) => {
    if (user === null || user === undefined) {
      return;
    }

    setLoading(true);

    let res = await fetch(`${apiUrl}/${user}`);
    let data = await res.json();

    setUserName(data);

    setLoading(false)

  }

  // useEffect(() => {
  //   fetchData();
  // }, [search])

  let handleSearch = (e) => {
    fetchData(search);

  }

  return (
    <>
      <h1>Github User Search</h1>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      {loading ? (<p>Loading...</p>) : ''}
      {
        userName !== null && (
          userName.status === "404" ? (
            <p style={{ color: 'red' }}>{userName.message}</p>
          ) : (
            <div>
              <h2>{userName.login}</h2>
              <br />
              <img src={userName.avatar_url} width={100} />
              <br />
              <p>Location: {userName.location ? userName.location : 'N/A'}</p>
              <br />
              <p>Public Repos: {userName.public_repos}</p>
            </div>
          )
        )
      }


    </>
  )

}

export default App
