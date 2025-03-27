import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});
const ProfileDescription = () => {
  return (
    <div className="flex flex-col justify-center bg-gray-900 p-6 text-white">
      <h1 className="text-lg font-semibold text-purple-400 uppercase">
        Olá, eu me chamo Joao!
      </h1>
      <h1 className={`${poppins.className} mt-2 text-5xl font-bold`}>
        Eu construo experiências digitais!
      </h1>
    </div>
  );
};

export default ProfileDescription;
