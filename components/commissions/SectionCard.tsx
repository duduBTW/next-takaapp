import React from "react";

import { useRouter } from "next/router";
import { useTransition, animated } from "react-spring";
import { CardItemProps } from "../data";
import { Button, CardItem, ImageCard } from "../../styles/commissions";
import useTranslation from "next-translate/useTranslation";

export default function SectionCard({
  item,
  cat,
}: {
  item: CardItemProps;
  cat: string;
}) {
  const history = useRouter();
  let { t } = useTranslation();

  const transitions = useTransition(item.features, (item) => item, {
    from: { transform: "translate3d(-100px,0px,0)", opacity: 0 },
    enter: { transform: "translate3d(0,0px,0)", opacity: 1 },
    leave: { transform: "translate3d(-100px,0px,0)", opacity: 0 },
    trail: 80,
  });

  return (
    <CardItem>
      <div className="info left">
        <div className="title">{item.title}</div>
        <div className="price">{item.price}</div>

        <Button
          onClick={() => history.push(`/commissions/${cat}/${item.title}`)}
          style={{ width: "80%" }}
        >
          {t("commissions:info")}
        </Button>
      </div>
      <ImageCard
        image={item.images[Math.floor(Math.random() * item.images.length)].url}
        className="img"
      />
      <div className="info right">
        {item.features && (
          <ul>
            {transitions.map(({ item, props, key }) => (
              <animated.li key={key} style={props}>
                {item}
              </animated.li>
            ))}
          </ul>
        )}
      </div>
    </CardItem>
  );
}
