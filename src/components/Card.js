import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`https://www.stratiz.net/assets/images/robot-998x643.png`}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">Engineering</h5>
          <p className="card-text">I make lots of cool things</p>
          <button className="btn btn-primary">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
}
