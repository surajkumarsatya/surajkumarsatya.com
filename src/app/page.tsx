import Image from "next/image";
import logo from "../../public/images/logo.png";
import { Intro } from "@/components/Intro";

export default function Home() {
  return (
    <section>
      <Intro />
    </section>
  );
}
