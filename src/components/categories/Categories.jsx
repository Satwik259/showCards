import React from "react";
import "./categories.css";
const Categories = () => {
  return (
    <div>
      <h1>CATEGORIES</h1>
      <div className="allcat-gap">
        <div className="cat-flex">
          <p>HAIR STRAIGHTNER</p>
          <p>(20)</p>
        </div>
        <hr color="grey" />
        <div className="cat-flex">
          <p>HAIR DRYER </p>
          <p>(20)</p>
        </div>
        <hr color="grey" />
        <div className="cat-flex">
          <p>BEARD TRIMMER</p>
          <p>(20)</p>
        </div>
        <hr color="grey" />
        <div className="cat-flex">
          <p>HAIR SPRAY</p>
          <p>(20)</p>
        </div>
        <hr color="grey" />
        <div className="cat-flex">
          <p>BEARD WAX</p>
          <p>(20)</p>
        </div>
        <hr color="grey" />
        <div className="cat-flex">
          <p>HAIR SHINING OIL</p>
          <p>(20)</p>
        </div>
        <hr color="grey" />
      </div>
      <aside>
        <h1>TAGS</h1>
        <div className="tags-wrap">
            <p>CHARITY </p>
            <p>KIDS</p>
            <p>NOPROFIT </p>
            <p>CAUSES</p>
            <p>FUNDRAISING</p>
            <p>DONATION</p>
            <p>PAYPAL</p>
            <p>ORGANIZATION</p>
            <p>DONATE</p>
            <p>NEW</p>
        </div>
      </aside>
    </div>
  );
};

export default Categories;
