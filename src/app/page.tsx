import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h2>Invoices</h2>
        <p>There are 7 total invoices</p>
      </div>
    </main>
  );
}
