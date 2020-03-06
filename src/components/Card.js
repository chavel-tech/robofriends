import React from "react";

const Card = ({ name, username, email, id }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      {/*for TEMPLATE LITERALS WE USE BACK TICK INSTEAD OF QUOTES-ALT GR+7*/}
      <div>
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
