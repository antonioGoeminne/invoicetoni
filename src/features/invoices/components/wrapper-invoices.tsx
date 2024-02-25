import { InvoiceCard } from "./invoice-card";
import styles from "../styles/wrapper-invoices.module.css";
import { InvoiceType } from "../types";

export const WrapperInvoices = async ({
  invoices,
}: {
  invoices: InvoiceType[];
}) => {
  return (
    <div className={styles.wrapper}>
      {invoices?.map((invoice: InvoiceType, index: number) => (
        <InvoiceCard invoice={invoice} key={index} />
      ))}
    </div>
  );
};
