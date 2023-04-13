import styles from "./index.module.scss";

const Button = ({ text, icon, type = "primary", size = "small" }) => {
  return (
    <button className={styles.button + " " + styles[type] + " " + styles[size]}>
      {icon && <i className="icon">{icon}</i>}
      {text}
    </button>
  );
};
export default Button;
