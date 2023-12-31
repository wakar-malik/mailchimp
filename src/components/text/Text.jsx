import styles from "./Text.module.css";

function Text({ children, size = 1, className = "", lineHeight = 1 }) {
  const classes = `${styles.text} ${className}`;
  return (
    <p
      style={{
        fontSize: `${size}rem`,
        lineHeight: lineHeight,
      }}
      className={classes}
    >
      {children}
    </p>
  );
}

export default Text;
