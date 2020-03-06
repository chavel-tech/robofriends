import React from "react";
import Card from "./Card";
/*we wanna loop through the objects-map function and we added key={i} because if we c hange object or delete,it will be updated*/
const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};
export default CardList;
