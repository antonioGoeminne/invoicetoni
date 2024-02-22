import { InvoiceCard } from "./invoice-card";
import styles from "../styles/wrapper-invoices.module.css";
import { getInvoices } from "@/features/api/get-invoices";
import { InvoiceType } from "../types";

export const WrapperInvoices = async () => {
  const invoices = await getInvoices();

  return (
    <div className={styles.wrapper}>
      {invoices?.map((invoice: InvoiceType, index: number) => (
        <InvoiceCard invoice={invoice} key={index} />
      ))}
    </div>
  );
};
