import styles from "./badge.module.css";

interface badgeProps {
  status: string;
}

export const Badge = (props: badgeProps) => {
  const { status } = props;

  const style = {
    paid: "badge_paid",
    draft: "badge_draft",
    pending: "badge_pending",
  };

  const style_dot = {
    paid: "badge_paid_dot",
    draft: "badge_draft_dot",
    pending: "badge_pending_dot",
  };

  return (
    <div className={styles[style[status]]}>
      <div className={styles.separator}>
        <div className={styles[style_dot[status]]}></div>
        <p>{status?.charAt(0)?.toUpperCase() + status?.slice(1)}</p>
      </div>
    </div>
  );
};
