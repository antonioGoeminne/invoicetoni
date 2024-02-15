import { Input } from "@/features/ui";
import styles from "../styles/form-invoice.module.css";

export const FormInvoice = () => {
  return (
    <div>
      <h2 className={styles.title}>Add new invoice</h2>
      <Input placeholder="Test" sx={{ width: "100%" }} id="test" label="Test" />
    </div>
  );
};
