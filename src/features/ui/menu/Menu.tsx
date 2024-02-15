"use client";
import * as Menubar from "@radix-ui/react-menubar";
import styles from "./menu.module.css";

interface menuProps {
  label: string;
  options: string[];
}

export const Menu = (props: menuProps) => {
  const { label, options } = props;

  return (
    <Menubar.Root>
      <Menubar.Menu>
        <Menubar.Trigger className={styles.menuTrigger}>
          <p>{label}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#97ace2"
            style={{
              width: "15px",
              height: "15px",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Menubar.Trigger>
        <Menubar.Portal >
          <Menubar.Content className={styles.portal}>
            {options?.map((option, index) => (
              <Menubar.Item className={styles.menuItem} key={index}>{option}</Menubar.Item>
            ))}
          </Menubar.Content>
        </Menubar.Portal>
      </Menubar.Menu>
    </Menubar.Root>
  );
};
