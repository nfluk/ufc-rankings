import React from 'react';

function AthleteCard({ name, record }) {
  return (
    <div>
      <p>{name}</p>
      <p>{record}</p>
    </div>
  );
}

export default AthleteCard;
