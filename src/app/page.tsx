import { Menu } from "@/features/ui";
import styles from "./page.module.css";
import { WrapperInvoices } from "@/features/invoices/components/wrapper-invoices";
import { DrawerInvoice } from "@/features/invoices/components/drawer-invoice";

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
        </div>
        <DrawerInvoice />
      </div>
      <WrapperInvoices />
    </main>
  );
}
