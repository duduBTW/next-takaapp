import React from "react";

import Section from "../../components/commissions/Section";
import useData from "../../components/data";

const Commissions = () => {
  const list = useData();
  return (
    <div>
      {list.map((listItem, index) => (
        <Section key={index} content={listItem} />
      ))}
    </div>
  );
};

export default Commissions;
