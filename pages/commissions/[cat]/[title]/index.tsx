import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { config, useSpring, animated } from "react-spring";

import Card from "../../../../components/commissions/Card";
import useData, { CardItemProps } from "../../../../components/data";
import { Title } from "../../../../styles/commissions";
import { useOrder } from "../../../_app";

function ComItem() {
  const list = useData();
  const [item, setItem] = useState<CardItemProps | null>();
  const history = useRouter();
  const { cat, title } = history.query;

  useEffect(() => {
    var items = list
      .find((item1) => item1.type === cat)
      ?.content.find((item2) => item2.title === title);

    setItem(items);
  }, []);

  const props = useSpring({
    from: { transform: "translate3d(100px,0px,0px)" },
    to: { transform: "translate3d(0px,0px,0px)" },
    reset: true,
    config: config.default,
  });
  const { addOrder } = useOrder();

  const finish = (
    quantity: number | string,
    description: string,
    afther: string
  ) => {
    addOrder({
      description: description,
      quantity: Number(quantity),
      info: item,
    });

    history.push(afther);
  };

  return (
    <>
      {item && <Card content={item} finish={finish} />}
      <>
        <Title>
          <animated.div style={props}>
            {item &&
              item.title &&
              item.title
                .toUpperCase()
                .split("")
                .map((item, index) => (
                  <span key={index}>
                    {item} <br />{" "}
                  </span>
                ))}
          </animated.div>
        </Title>
      </>
    </>
  );
}

export default ComItem;
