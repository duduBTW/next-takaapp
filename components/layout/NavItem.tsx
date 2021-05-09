import React from "react";
import { IconContext } from "react-icons/lib";
import { animated, useSpring } from "react-spring";

export interface NavItemProps {
  size: number;
  label: string;
  link: string;
  history?: any;
  icon: JSX.Element;
}

export default function NavItem({
  size,
  history,
  icon,
  label,
  link,
}: NavItemProps) {
  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  return (
    <div
      onMouseEnter={() => {
        set({ y: size });
      }}
      onMouseLeave={() => {
        set({ y: 0 });
      }}
      onClick={() => history.push(link)}
      style={{
        padding: "20px 0px",
        background: "black",
        width: "100%",
        cursor: "pointer",
      }}
    >
      <IconContext.Provider
        value={{
          color: "white",
          size: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            background: "black",
            width: "100%",
          }}
        >
          {icon}
          <animated.div
            style={{
              width: y.interpolate((v) => `${v}px`),
              height: 50,
              left: 0,
              top: -10,
              bottom: 0,
              position: "absolute",
              background: "black",
              zIndex: -1,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
            className="glance"
          >
            <div
              style={{
                color: "white",
                overflow: "hidden",
                marginRight: 20,
                fontSize: "1rem",
                fontWeight: 400,
                letterSpacing: 4,
              }}
            >
              {label.toUpperCase()}
            </div>
          </animated.div>
        </div>
      </IconContext.Provider>
    </div>
  );
}
