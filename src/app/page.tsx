import styles from "./page.module.css";
import { WrapperInvoices } from "@/features/invoices/components/wrapper-invoices";
import { DrawerInvoice } from "@/features/invoices/components/drawer-invoice";
import { Suspense } from "react";
import { getInvoices } from "@/features/api";

export default async function Home() {
  const invoices = await getInvoices();

  return (
    <main className={styles.main}>
      <div className={styles.topBar}>
        <div>
          <h2>Invoices</h2>
          <p className={styles.subText}>
            There are {invoices?.length || 0} total invoices
          </p>
        </div>
        <Suspense>
          <DrawerInvoice />
        </Suspense>
      </div>
      <WrapperInvoices invoices={invoices} />
    </main>
  );
}
