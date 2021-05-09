import Link from "next/link";

import { useSpring, animated } from "react-spring";
import { HeaderStyle, CardContainer, Card } from "../../styles/home";
import useData from "../data";
import { portItemProps } from "../../pages/portfolio";

export function shuffle(array: any): portItemProps[] {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export default function Header() {
  const list = useData();
  let listTemp: portItemProps[] = [
    {
      type: "",
      url: "",
      title: "",
    },
  ];

  listTemp.pop();

  list.map((item) =>
    item.content.map((row) =>
      row.images.forEach((image) => {
        if (image.url)
          listTemp.push({
            url: image.url,
            type: item.type,
            title: row.title ? row.title : "",
          });
      })
    )
  );

  const props = useSpring({
    to: { opacity: 1, transform: "translate3d(0px,0px,0px)" },
    from: { opacity: 0, transform: "translate3d(0px,-300px,0px)" },
  });

  const data = shuffle(listTemp);

  return (
    <animated.div style={props}>
      <HeaderStyle>
        <div className="main">
          <div>
            <h1>
              TAKA
              <br />
              COMISSIONS
            </h1>
            <br />
            <br />
            <h2>
              Change Your Life
              <br />
              Do One Now
            </h2>
          </div>
          <Link href="/commissions" prefetch>
            <a className="link" href="">
              See more
            </a>
          </Link>
        </div>
        <CardContainer>
          <Card image={data[0].url}>
            <Link
              href={`/commissions/${data[0].type}/${data[0].title}`}
              prefetch
            >
              <a href="">
                <label>{data[0].title}</label>
              </a>
            </Link>
          </Card>
        </CardContainer>
      </HeaderStyle>
    </animated.div>
  );
}
