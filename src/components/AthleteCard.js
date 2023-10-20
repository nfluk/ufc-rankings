import React from 'react';
import './athleteCard.css';

function AthleteCard({ name, record }) {
  return (
    <section className="flex justify-center flex-column tc bg-light-blue dib br3 ma2 bw2 shadow-3 padding__card">
      <img
        src="https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/2019-02/GettyImages-103181367.jpg?7DsOdb87hLr74FzbYFlnUmzZmy0zLXnM&itok=mFV1e_ic"
        alt={name}
        className="br-100"
      />
      <div className="bg-lightest-blue br3 ma2">
        <p>{name}</p>
        <p>{record}</p>
      </div>
    </section>
  );
}

export default AthleteCard;
