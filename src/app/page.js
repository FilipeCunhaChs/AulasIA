import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import AnimatedBackground from "./components/Vanta";
import Animate from "./components/Vanta";

export default function Home() {
  return (
    <div className="min-h-screen min-w-auto">
      <Header />
        <Banner />
    </div>
  );
}
