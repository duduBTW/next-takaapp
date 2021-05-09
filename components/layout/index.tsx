import React from "react";

import {
  AiFillHome,
  AiOutlineFileImage,
  AiFillShopping,
  AiFillSnippets,
  AiFillLayout,
} from "react-icons/ai";
import { MdLanguage } from "react-icons/md";

import { NavBarContainer, Title, Icons } from "../../styles/layout";
import { FaFileContract } from "react-icons/fa";
import { useRouter } from "next/router";
import NavItem, { NavItemProps } from "./NavItem";
import useTranslation from "next-translate/useTranslation";

export default function Navbar() {
  const history = useRouter();
  let { lang } = useTranslation();

  const listIcons: Array<NavItemProps> = [
    {
      icon: <AiFillHome />,
      size: 180,
      label: lang === "pt-BR" ? "Inicio" : "Home",
      link: "/home",
    },
    {
      icon: <AiOutlineFileImage />,
      size: 220,
      label: lang === "pt-BR" ? "Portfólio" : "Portfolio",
      link: "/portfolio",
    },
    {
      icon: <AiFillSnippets />,
      size: 260,
      label: lang === "pt-BR" ? "Comissão" : "commissions",
      link: "/commissions",
    },
    {
      icon: <AiFillShopping />,
      size: 200,
      label: lang === "pt-BR" ? "Carrinho" : "My cart",
      link: "/cart",
    },
    {
      icon: <AiFillLayout />,
      size: 260,
      label: lang === "pt-BR" ? "Desenvolvedor" : "Developer",
      link: "/dev",
    },
    {
      icon: <MdLanguage />,
      size: 230,
      label: lang === "pt-BR" ? "Idioma" : "Language",
      link: "/language",
    },
    {
      icon: <FaFileContract />,
      size: 230,
      label: lang === "pt-BR" ? "Contrato" : "Contract",
      link: "/contract",
    },
  ];

  return (
    <NavBarContainer>
      <Title>
        T <br />
        A <br />
        K <br />
        A <br />
      </Title>
      <hr />
      <Icons>
        {listIcons.map((itemIcon, index) => (
          <NavItem key={index} {...itemIcon} history={history} />
        ))}
      </Icons>
    </NavBarContainer>
  );
}
