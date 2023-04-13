import styles from "./index.module.scss";

const Feature = ({ imgSource, title, subtitle, text }) => {
  return (
    <div className={styles.feature}>
      <img src={imgSource} />
      <h2>{title}</h2>
      <h6>{subtitle}</h6>
      <p>{text}</p>
    </div>
  );
};
export default Feature;
