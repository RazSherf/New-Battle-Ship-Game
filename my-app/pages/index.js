import styles from "../styles/Home.module.css";
import WelcomePage from "../Components/Welcome/WelcomePage";

export default function Home() {
  return (
    <div className={styles.flexboxContiner}>
      <WelcomePage />
    </div>
  );
}
