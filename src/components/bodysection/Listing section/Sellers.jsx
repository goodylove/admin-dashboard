import React from "react";

const Sellers = ({ item, img, head, icon, text1, text2, text3 }) => {
  //   const { text1, text2, text3, head, icon } = item;

  return (
    <div className="topsellers">
      <div className="heading flex">
        <h3>{head}</h3>
        <button className="btn flex">
          see All <div className="icon"> {icon}</div>
        </button>
      </div>

      <div className="card flex">
        <div className="users">
          {img.map((image, index) => (
            <img src={image} alt="" key={index} />
          ))}
        </div>
        <div className="cardText">
          <span>
            {text1}
            <br />
            <small>
              {text2} <span className="date"> {text3}</span>
            </small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sellers;
