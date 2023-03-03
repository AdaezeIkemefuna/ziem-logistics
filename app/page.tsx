import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.scss";
import Link from "next/link";
import Header from "./components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
    </main>
  );
}
