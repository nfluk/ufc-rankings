import React from 'react';
import AthleteCard from './AthleteCard';

function CardList({ athletes }) {
  return (
    <main className="flex justify-center">
      {athletes.map((athlete) => {
        return (
          <AthleteCard
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
