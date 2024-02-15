import { Button, Menu } from "@/features/ui";
import styles from "./page.module.css";
import { WrapperInvoices } from "@/features/invoices/components/wrapper-invoices";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.topBar}>
        <div>
          <h2>Invoices</h2>
          <p className={styles.subText}>There are 7 total invoices</p>
        </div>
        <div className={styles.flex} style={{ gap: 15 }}>
          <Menu options={["Latest first", "Older first"]} label="Sort" />
          <Menu
            options={["Paid", "Pending", "Draft", "Cancelled"]}
            label="Filter by status"
          />
          <Button label="New invoice" />
        </div>
      </div>
      <WrapperInvoices />
    </main>
  );
}
