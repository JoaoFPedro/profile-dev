"use client";

import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { useState } from "react";
import { BiMobile } from "react-icons/bi";
import { CgMicrosoft } from "react-icons/cg";
import { DiPython } from "react-icons/di";

const icons = [
  {
    icon: <SiHtml5 />,
    name: "HTML",
    description: "Linguagem de marcação para estruturação de páginas web.",
  },
  {
    icon: <SiCss3 />,
    name: "CSS",
    description: "Linguagem de estilos para design e layout de páginas web.",
  },
  {
    icon: <SiTailwindcss />,
    name: "Tailwind",
    description:
      "Framework CSS utilitário para estilização rápida e eficiente.",
  },
  {
    icon: <SiJavascript />,
    name: "JS",
    description:
      "Linguagem de programação para interatividade e lógica no front-end.",
  },
  {
    icon: <SiTypescript />,
    name: "TS",
    description: "Superset do JavaScript que adiciona tipagem estática.",
  },
  {
    icon: <SiNodedotjs />,
    name: "Node Js",
    description:
      "Ambiente de execução JavaScript no lado do servidor, eficiente e escalável, baseado no motor V8 do Chrome.",
  },
  {
    icon: <SiReact />,
    name: "React",
    description:
      "Biblioteca JavaScript para construção de interfaces de usuário reativas.",
  },
  {
    icon: <SiNextdotjs />,
    name: "Next.js",
    description:
      "Framework React para renderização no servidor e geração de sites estáticos.",
  },
  {
    icon: <BiMobile />,
    name: "React Native",
    description:
      "Framework para desenvolvimento de aplicativos móveis nativos usando JavaScript e React.",
  },

  {
    icon: <SiGit />,
    name: "Git",
    description:
      "Sistema de controle de versão para rastrear mudanças e colaborar em projetos.",
  },

  {
    icon: <CgMicrosoft />,
    name: "Microsoft Enviroment",
    description:
      " Conjunto de tecnologias e ferramentas da Microsoft, incluindo Windows, Azure, .NET e Office 365, para desenvolvimento e produtividade",
  },
  {
    icon: <DiPython />,
    name: "Python",
    description:
      " Linguagem de programação amplamente usada em automação, ciência de dados, web e inteligência artificial.",
  },
];

const ProfileSkilss = () => {
  const [hoveredTech, setHoveredTech] = useState<(typeof icons)[number] | null>(
    null,
  );

  return (
    <>
      <h1 className="text-muted mb-4 px-8 text-3xl">Conhecimentos</h1>
      <div className="flex">
        <div className="flex w-[50%] flex-wrap justify-center gap-4 rounded-lg bg-gray-900 p-8">
          {icons.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-lg bg-gray-800 p-2 shadow-lg transition-all hover:bg-purple-500"
              style={{ flex: "1 1 calc(25% - 8px)" }}
              onMouseEnter={() => setHoveredTech(item)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <span className="mb-1 text-sm text-gray-300">{item.name}</span>
              <span className="text-3xl text-purple-400">{item.icon}</span>
            </div>
          ))}
        </div>
        {hoveredTech && (
          <div className="mt-10">
            <h2 className="text-2xl text-purple-400">{hoveredTech.name}</h2>
            <p className="text-xl text-gray-300">{hoveredTech.description}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileSkilss;
