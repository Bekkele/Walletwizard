import Button from "../Button";
import styles from "./index.module.scss";

const Hero = () => {
  const handleLearnMoreClick = () => {
    window.scrollTo({
      behavior: "smooth",
      top: document.body.scrollHeight
    });
  };
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1>Credit Card Management Made Easy</h1>
        <h2>
          We’re excited to help you simplify your payment experience and find
          the perfect credit card for your lifestyle.{" "}
        </h2>
        <a href="https://xd.adobe.com/view/0874ea9f-e31a-4fdd-8d63-0dd960343a7a-5d27/?fullscreen">
          <Button text="Download App" icon="apple" size="large" />
        </a>
        <div className={styles.learnMore} onClick={handleLearnMoreClick}>
          learn more <img className={styles.arrow} src="/arrow.png" />
        </div>
      </div>
      <div className={styles.graphic}>
        <div className={styles.wallet}></div>
        <div className={styles.cards}>
          <img src="/visa.png" />
          <img src="/master.png" />
          <img src="/amex.png" />
          <img style={{ opacity: 0 }} src="/visa.png" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
