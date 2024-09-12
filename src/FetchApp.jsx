import React, { useState, useEffect } from 'react';

function FetchApp() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function fetchUser(){
setLoading(true);

    fetch('https://randomuser.me/api/')
    .then((result) => result.json())
    .then((data) => {setUser(data.results[0]);
      console.log(data);

    setLoading(false)});
  }

  useEffect(() => {
  fetchUser();
  }, []);

  return (
    <div>
      {loading ? ("Loading...") : <><img src={user.picture.large} alt="Random User" />
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
      <p>{user.cell}</p>
      <button onClick={fetchUser}>Fetch New User</button></>}
     
    </div>
  );
}

export default FetchApp;
