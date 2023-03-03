import styles from "./Header.module.scss";
import Link from "next/link";
export default function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <h1>hello world</h1>
      <Link href="/about">About page</Link>
    </div>
  );
}
