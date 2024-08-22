import React from "react";
import mui from "../../assets/icon-materialui.svg";
import tailwind from "../../assets/icon-tailwindcss.svg";
import antd from "../../assets/icon-ant-design.svg";
import postMan from "../../assets/icon-postman.svg";
import graphql from "../../assets/icon-graphql.svg";
import vercel from "../../assets/icon-vercel.svg";
import jest from "../../assets/icon-jest.svg";
import eslint from "../../assets/icon-eslint.svg";
import ts from "../../assets/icon-ts.svg";
import redux from "../../assets/icon-redux.svg";
import { LogoData } from "../../interfaces";

const logos: Record<string, LogoData> = {
  mui: { src: mui, alt: "Material UI Logo" },
  tailwind: { src: tailwind, alt: "Tailwind CSS Logo" },
  antd: { src: antd, alt: "Ant Design Logo" },
  postman: { src: postMan, alt: "Postman Logo" },
  graphql: { src: graphql, alt: "GraphQL Logo" },
  vercel: { src: vercel, alt: "Vercel Logo" },
  jest: { src: jest, alt: "Jest Logo" },
  eslint: { src: eslint, alt: "ESLint Logo" },
  ts: { src: ts, alt: "TypeScript Logo" },
  redux: { src: redux, alt: "Redux Logo" },
};

interface LogoProps {
  name: string;
}

const Logo: React.FC<LogoProps> = ({ name }) => {
  const logo = logos[name];
  return <img src={logo.src} className="h-8 w-8" alt={logo.alt} />;
};

export default Logo;
