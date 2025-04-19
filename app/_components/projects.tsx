"use client";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

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
  const handleCardClick = (link: string | URL | undefined) => {
    window.open(link, "_blank");
  };
  return (
    <>
      <h1 className="text-muted px-6 py-3 text-center text-2xl font-bold">
        Projetos
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((item, index) => (
          <div key={index} className="w-full p-4">
            <Card className="flex h-full flex-col justify-between rounded-xl border border-blue-700 bg-gray-900 p-4">
              <CardHeader>
                <CardTitle>
                  <h1 className="text-muted">{item.name}</h1>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={500}
                />
                <h1 className="text-muted mt-4">{item.description}</h1>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  onClick={() => handleCardClick(item.link)}
                  className="cursor-pointer bg-blue-700 hover:bg-none"
                  variant="ghost"
                >
                  Acessar
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
