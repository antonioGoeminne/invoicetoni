import { InputHTMLAttributes } from "react";
import styles from "./input.module.css";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  sx?: object;
  error?: any; // valibot don't give an example for this
  value?: any
}

export const Input = (props: inputProps) => {
  const { sx, label, error } = props;

  return (
    <div className={styles.flex}>
      <label className={styles.label}>{label}</label>
      <input style={{ ...sx }} className={styles.input} {...props} />
      {error && (
        <p className={`${styles.error} ${error && styles.bounce}`}>{error}</p>
      )}
    </div>
  );
};
