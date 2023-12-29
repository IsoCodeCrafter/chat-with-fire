import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/config';

const RoomPage = ({ setIsAuth, setRoom }) => {
  // * kullanıcın oturumunu sonlandırma
  const handleLogout = () => {
    // firebase ile açtığımı oturumu sonlandırma
    signOut(auth).then(() => {
      // lokalden kaldırma
      localStorage.removeItem('token');
      // login sayfasına yölendirmeyi  tetikler
      setIsAuth(false);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // oda ismini küçük harfe çevirme
    const roomName = e.target[0].value.toLowerCase();
    // state i güncelleme
    setRoom(roomName);
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Room</h1>
      <p>Rooms options</p>

      <input type="text" placeholder="..book lovers" />
      <button type="submit">SING</button>
      <button type="button" onClick={handleLogout}>
        SING OUT
      </button>
    </form>
  );
};

export default RoomPage;
