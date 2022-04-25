import React from "react";
import Image from "next/image";
const PackageListCards = (props) => {
  const { id, image, name, coverageArea, duration, person, price } =
    props.items;
  return (
    <div className="package-cards">
      <div className="card mb-5">
        <Image
          className="card-img-top pack-img"
          src={image}
          width={"500"}
          height={"300"}
          alt="tourist places"
        />
        <div className="card-body">
          <h2 className="card-title bold-header text-deepdark">{name}</h2>
          <div className="d-flex">
            <div className="mr-2">
              <h5>
                <i className="fa-solid fa-paper-plane text-paste"></i>
              </h5>
            </div>
            <div>
              <h4 className="card-subtitle mb-2 text-muted">{coverageArea}</h4>
            </div>
          </div>
          <div className="d-flex justify-content-around text-center">
            <div>
              <i className="fa-solid fa-clock text-paste"></i>
              <p>Duration</p>
              <p className="bold-header text-deepdark">{duration} Days</p>
            </div>
            <div>
              <i className="fa-solid fa-user-group text-paste"></i>
              <p>Person</p>
              <p className="bold-header text-deepdark">{person} Adult</p>
            </div>
            <div>
              <i className="fa-solid fa-tag text-paste"></i>
              <p>Price</p>
              <p className="bold-header text-deepdark">{price} TK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageListCards;
