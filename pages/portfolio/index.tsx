import React, { useEffect, useState } from "react";
import {
  Header,
  Content,
  Image,
  Select,
  SelectContainer,
} from "../../styles/portfolio";

// @ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useRouter } from "next/router";
import useData from "../../components/data";

import { MdExpandMore } from "react-icons/md";

export function shuffle(array: any) {
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

export interface portItemProps {
  type: string;
  title: string;
  url: string;
}

function Portfolio() {
  const history = useRouter();
  const [listTemp, setListTemp] = useState<portItemProps[]>([]);
  const [filterSelected, setFilterSelected] = useState(history.query.filter);
  const list = useData();

  useEffect(() => {
    setListTemp([]);
    list.map((item) =>
      item.content.map((row) => {
        if (!filterSelected || filterSelected === row.title) {
          return row.images.forEach((image) => {
            if (image.url)
              setListTemp((s) => [
                ...s,
                {
                  url: image.url,
                  type: item.type,
                  title: row.title ? row.title : "",
                },
              ]);
          });
        }
      })
    );
  }, [filterSelected]);

  const redirecCom = (cat: string, title: string) => {
    history.push(`/commissions/${cat}/${title}`);
  };
  const data = shuffle(listTemp);

  return (
    <div>
      <Header>PORTFOLIO</Header>
      <SelectContainer>
        <Select
          value={filterSelected}
          onChange={(e) => setFilterSelected(e.target.value)}
        >
          {list.map((item) =>
            item.content.map((row) => (
              <option key={row.title} value={row.title}>
                {row.title}
              </option>
            ))
          )}
        </Select>
        <div className="icon">
          <MdExpandMore />
        </div>
      </SelectContainer>
      <Content>
        {data.length && (
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 400: 1, 750: 2, 900: 3, 1300: 4 }}
          >
            <Masonry>
              {data.map(
                (item) =>
                  item && (
                    <Image onClick={() => redirecCom(item.type, item.title)}>
                      <img src={item.url} alt="a" />
                      <div className="overlay">
                        <div className="title">{item.type}</div>
                        <div className="subtitle">{item.title}</div>
                        <div className="desc">Click to see more</div>
                      </div>
                    </Image>
                  )
              )}
            </Masonry>
          </ResponsiveMasonry>
        )}
      </Content>
    </div>
  );
}

export default Portfolio;
