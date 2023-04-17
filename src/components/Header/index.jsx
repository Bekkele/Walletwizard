import Button from "../Button";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a href="https://xx0zkr-3000.csb.app/">
        <img src="/walletwizardlogo2.png" />
      </a>
      <nav>
        <span className={styles.home}>home</span>
        <span className={styles.about}>about</span>
        <span className={styles.pricing}>pricing</span>
        <Button text="Sign In" icon="person" type="secondary" />
        <a href="https://xd.adobe.com/view/0874ea9f-e31a-4fdd-8d63-0dd960343a7a-5d27/?fullscreen">
          <Button text="Download App" icon="apple" />
        </a>
      </nav>
    </header>
  );
};
export default Header;
