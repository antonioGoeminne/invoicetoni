import { Badge } from "@/features/ui";
import styles from "../styles/invoice-card.module.css";
import Link from "next/link";
import { InvoiceType } from "../types";
import { format } from "date-fns";

interface invoiceCardType {
  invoice: InvoiceType;
}

export const InvoiceCard = (props: invoiceCardType) => {
  const { invoice } = props;

  const { _id, client_name, due_date, status, total_amount } = invoice;

  const invoice_id = `#${_id.slice(-5).toUpperCase()}`;
  const formatted_date = format(new Date(due_date), "dd MMM yyyy");

  return (
    <Link href={`/?id=${_id}`}>
      <div className={styles.wrapper}>
        <div className={styles.separator}>
          <div className={styles.leftside}>
            <p className={styles.code}>{invoice_id}</p>
            <p className={styles.date}>Due {formatted_date}</p>
            <p className={styles.date}>{client_name}</p>
          </div>
          <div className={styles.rightside}>
            <p className={styles.price}>${total_amount}</p>
            <Badge status={status} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#97ace2"
              style={{
                width: "12px",
                height: "12px",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};
