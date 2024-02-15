import { Badge } from "@/features/ui";
import styles from "../styles/invoice-card.module.css";

export const InvoiceCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.separator}>
        <div className={styles.leftside}>
          <p className={styles.code}>#RT840</p>
          <p className={styles.date}>Due 19 Aug 2021</p>
          <p className={styles.date}>Toni</p>
        </div>
        <div className={styles.rightside}>
          <p className={styles.price}>$1200</p>
          <Badge status="paid" />
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
  );
};
