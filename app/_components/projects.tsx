"use client";
import Image from "next/image";

import { useState } from "react";

const projects = [
  {
    image: "/finance_ia.png",
    name: "FinanceIA",
    description: "SaaS para controlar finanças com integração com o ChatGPT.",
    link: "https://finance-ia-liard.vercel.app/login",
  },
  {
    image: "/ifood.png",
    name: "Ifood-Clone",
    description: "Clone do ifood.",
    link: "https://fsw-foods-sc1d.vercel.app/",
  },
  {
    image: "/barbershop.png",
    name: "BarberShop",
    description: "Sistema de gerenciamento para barbearias.",
    link: "https://fsc-barbershop.vercel.app/",
  },
  {
    image: "/ecommerce.png",
    name: "E-commerce",
    description: "E-commerce para loja de roupas.",
    link: "https://ecoomerce-frontend-six.vercel.app/",
  },
];

const Projects = () => {
  const [hoveredTech, setHoveredTech] = useState<
    (typeof projects)[number] | null
  >(null);
  const handleCardClick = (link: string | URL | undefined) => {
    window.open(link, "_blank");
  };
  return (
    <>
      <h1 className="text-muted mb-2 px-8 text-3xl">Projetos</h1>
      <div className="flex">
        <div className="flex w-[60%] flex-wrap justify-center gap-4 rounded-lg bg-gray-900 p-8">
          {projects.map((item, index) => (
            <div
              key={index}
              className="relative flex h-30 w-80 overflow-hidden rounded-lg bg-gray-800 p-12 shadow-lg transition-all hover:bg-purple-500"
              style={{ flex: "1 1 calc(50% - 8px)" }}
              onMouseEnter={() => setHoveredTech(item)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <span className="mb-1 text-sm text-gray-300">{item.name}</span>
              <div className="cursor-pointer hover:bg-purple-500">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-all duration-300 hover:brightness-50"
                  onClick={() => handleCardClick(item.link)}
                />
              </div>
            </div>
          ))}
        </div>
        {hoveredTech && (
          <div className="">
            <h2 className="text-2xl text-purple-400">{hoveredTech.name}</h2>
            <p className="mb-5 text-xl text-gray-300">
              {hoveredTech.description}
            </p>
            <Image
              src={hoveredTech.image}
              alt={hoveredTech.name}
              width={900}
              height={900}
              className="mb-8 h-60 w-150 transition-all duration-300 hover:brightness-50"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
