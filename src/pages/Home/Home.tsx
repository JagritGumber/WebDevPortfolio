import { Hero, Navbar } from "../../components";
import { useEffect } from "react";
import "./Home.css";
import { useAppDispatch } from "../../state";
import { initParticles } from "../../state/features";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initParticles());
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
