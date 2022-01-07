import { Navbar } from "./Navbar";
import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Layout = ({ className, children }: Props) => {
  return (
    <main className={className}>
      <Navbar />
      <div className={styles.pageContent}>{children}</div>
    </main>
  );
};