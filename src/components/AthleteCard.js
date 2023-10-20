import React from 'react';
import './athleteCard.css';

function AthleteCard({ id, name, record }) {
  return (
    <section className="tc bg-silver dib br3 ma2 bw2 shadow-3 padding__card">
      <img src={`https://robohash.org/${id}?set=set2`} alt={name} />
      <div className="bg-near-white br3 ma2 pa2">
        <p>{name}</p>
        <p>{record}</p>
      </div>
      <div>
        <p>text</p>
        <p>text</p>
      </div>
    </section>
  );
}

export default AthleteCard;
