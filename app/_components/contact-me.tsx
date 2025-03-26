"use client";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { TfiEmail } from "react-icons/tfi";

const contact = [
  {
    icon: <TfiEmail size={50} />,
    name: "Email",
    link: "mailto:joao.fpsilva98@outlook.com",
  },
  {
    icon: <BsWhatsapp size={50} />,
    name: "CSS",
    link: "https://wa.me/5531996188558",
  },
  {
    icon: <LiaLinkedin size={50} />,
    name: "Tailwind",
    link: "https://www.linkedin.com/in/jo%C3%A3o-silva1998/",
  },
  {
    icon: <BsGithub size={50} />,
    name: "JS",
    link: "https://github.com/JoaoFPedro",
  },
];
const ContactMe = () => {
  const handleCardClick = (link: string | URL | undefined) => {
    window.open(link, "_blank");
  };

  return (
    <div className="mb-12 text-center">
      <h1 className="text-muted text-2xl font-bold">Contatos</h1>
      <div className="mt-4 flex justify-center gap-8">
        {contact.map((item, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(item.link)}
            className="cursor-pointer"
          >
            <span className="text-purple-400">{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
