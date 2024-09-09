

import React from 'react';

const Profile = () => {
    const email = 'example@example.com';
  return (
    <div className="profile-container">
      <h2>Perfil de Usuario</h2>
      <p>Email: {email}</p>
      <button  className="logout-button">
        Cerrar Sesión
      </button>
    </div>
  );
}

export default Profile;