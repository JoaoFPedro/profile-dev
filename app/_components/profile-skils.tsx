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
import { BiMobile } from "react-icons/bi";
import { CgMicrosoft } from "react-icons/cg";
import { DiPython } from "react-icons/di";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const icons = [
  {
    icon: <SiHtml5 size={20} />,
    name: "HTML",
    description: "Linguagem de marcação para estruturação de páginas web.",
  },
  {
    icon: <SiCss3 size={20} />,
    name: "CSS",
    description: "Linguagem de estilos para design e layout de páginas web.",
  },
  {
    icon: <SiTailwindcss size={20} />,
    name: "Tailwind",
    description:
      "Framework CSS utilitário para estilização rápida e eficiente.",
  },
  {
    icon: <SiJavascript size={20} />,
    name: "JavaScript",
    description:
      "Linguagem de programação para interatividade e lógica no front-end.",
  },
  {
    icon: <SiTypescript size={20} />,
    name: "TypeScript",
    description: "Superset do JavaScript que adiciona tipagem estática.",
  },
  {
    icon: <SiNodedotjs size={20} />,
    name: "Node Js",
    description:
      "Ambiente de execução JavaScript no lado do servidor, eficiente e escalável.",
  },
  {
    icon: <SiReact size={20} />,
    name: "React",
    description:
      "Biblioteca JavaScript para construção de interfaces de usuário reativas.",
  },
  {
    icon: <SiNextdotjs size={20} />,
    name: "Next.js",
    description:
      "Framework React para renderização no servidor e geração de sites estáticos.",
  },
  {
    icon: <BiMobile size={20} />,
    name: "React Native",
    description:
      "Framework para desenvolvimento de aplicativos móveis nativos usando JavaScript e React.",
  },

  {
    icon: <SiGit size={20} />,
    name: "Git",
    description:
      "Sistema de controle de versão para rastrear mudanças e colaborar em projetos.",
  },

  {
    icon: <CgMicrosoft size={20} />,
    name: "Microsoft Enviroment",
    description:
      " Conjunto de tecnologias Azure, .NET e Office 365, para desenvolvimento e produtividade.",
  },
  {
    icon: <DiPython size={20} />,
    name: "Python",
    description:
      " Linguagem de programação amplamente usada em automação, ciência de dados, web e inteligência artificial.",
  },
];

const ProfileSkilss = () => {
  return (
    <>
      <h1 className="text-muted px-6 py-3 text-2xl font-bold">Habilidades</h1>
      <div className="flex flex-wrap justify-center gap-4 p-6">
        {icons.map((item, index) => (
          <div key={index} className="h-50 w-60 flex-grow">
            <Card className="flex h-full flex-col bg-gray-900">
              <CardHeader>
                <CardTitle>
                  <div className="flex items-center gap-2">
                    <h1 className="text-muted">{item.name}</h1>
                    <span className="text-blue-700">{item.icon}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-muted">{item.description}</span>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProfileSkilss;
