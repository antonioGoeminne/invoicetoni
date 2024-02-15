import { InvoiceCard } from "./invoice-card";
import styles from '../styles/wrapper-invoices.module.css'

export const WrapperInvoices = () => {
  return (
    <div className={styles.wrapper}>
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
      <InvoiceCard />
    </div>
  );
};
