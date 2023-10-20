import React from 'react';
import AthleteCard from './AthleteCard';

function CardList({ athletes }) {
  return (
    <main>
      {athletes.map((athlete) => {
        return (
          <AthleteCard
            id={athlete.id}
            key={athlete.id}
            name={athlete.name}
            record={athlete.record}
          />
        );
      })}
    </main>
  );
}

export default CardList;
