import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/homepage/Logo.png";
import styles from "./TopNavigation.module.scss";
export default function TopNavigation(): JSX.Element {
  return (
    <nav className={styles.navigation}>
      <section className={styles.navigation__wrapper}>
        <section className={styles.navigation__left}>
          <Link href="/">
            <Image
              src={logo}
              alt="my logo"
              className={styles.navigation__logo}
            />
          </Link>
        </section>
        <section className={styles.navigation__right}>
          <Link href="/services">Our Services</Link>
          <Link href="/about">About Us</Link>
          <Link href="/account">Account</Link>
          <Link href="/support">Support</Link>

          <Link href="/login" className={styles.btn} id={styles.login}>
            Login
          </Link>

          <Link href="/signup" className={styles.btn} id={styles.signup}>
            signup
          </Link>
        </section>
      </section>
    </nav>
  );
}
