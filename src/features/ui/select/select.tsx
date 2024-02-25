import styles from "./select.module.css";

export const Select = (props: any) => {
  const { options } = props;
  return (
    <select className={styles.select} {...props}>
      {options.map((opt: any) => (
        <option key={opt} id={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
};
