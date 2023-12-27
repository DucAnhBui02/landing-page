import About from "../components/about/about";
import Banner from "../components/banner/Banner";
import EcoSystem from "../components/ecosys/EcoSys";
import Certificate from "../components/certificate/Certificate";
import Features from "../components/features/Features";
import Join from "../components/join/Join";

export default function Home() {
  return (
    <>
      <Banner />
      <Join />
      <About />
      <Features />
      <Certificate />
      <EcoSystem />
    </>
  );
}
