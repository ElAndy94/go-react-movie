// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers
    }

    fetch(`http://localhost:8080/movies`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      setMovies(data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Hello world!</h1>
    </div>
  );
}

export default App;
