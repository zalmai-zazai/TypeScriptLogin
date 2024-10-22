import React, { useState } from 'react';

type UserType = {
  sessionId: number;
  name: string;
};

const UseState = () => {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState<UserType | null>(null);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      name: userName,
      sessionId: Math.random() * 2,
    });
  };

  return (
    <div className="useStateExample">
      <h1>Usage of Use State</h1>
      {user ? (
        `${user.name} has logged in  : `
      ) : (
        <form action="">
          <input type="text" placeholder="Usernmae" onChange={handelChange} />
          <button onClick={handelClick}>Login</button>
        </form>
      )}
      {user?.name}
      {'  with Sessino ID : '}
      {user?.sessionId}
    </div>
  );
};

export default UseState;
