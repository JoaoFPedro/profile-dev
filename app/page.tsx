import Header from "./_components/header";
import ProfileDescription from "./_components/profile-description";
import ProfileSkilss from "./_components/profile-skils";

export default function Home() {
  return (
    <div className="space-y-10 px-60">
      <Header />
      <ProfileDescription />
      <ProfileSkilss />
    </div>
  );
}
