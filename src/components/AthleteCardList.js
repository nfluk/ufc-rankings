import React from 'react';
import AthleteCard from './AthleteCard';

function CardList({ athletes }) {
  return (
    <div className="grid">
      {athletes.map((athlete) => {
        return (
          <AthleteCard
            key={athlete.id}
            name={athlete.name}
            record={athlete.record}
          />
        );
      })}
    </div>
  );
}

export default CardList;
