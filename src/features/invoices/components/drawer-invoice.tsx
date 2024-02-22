"use client";

import { Button, Drawer } from "@/features/ui";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { FormInvoice } from "./form-invoice";
import styles from "../styles/drawer-invoice.module.css";
import { deleteInvoice } from "@/features/api/delete-invoice";

export const DrawerInvoice = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  const openDrawer = Boolean(searchParams.get("open"));

  const handleOpen = useCallback(
    (id: string | null) =>
      id?.length
        ? router.push(`/?id=${id}&open=true`)
        : router.push("/?open=true"),
    [router]
  );
  const handleClose = () => {
    router.push("/");
  };

  useEffect(() => {
    if (!id?.length && !openDrawer) return;
    handleOpen(id);
  }, [id, handleOpen, openDrawer]);

  return (
    <Drawer
      close={handleClose}
      isOpen={openDrawer}
      trigger={
        <Button onClick={handleOpen} withicon="true" label="New invoice" />
      }
      content={
        <>
          {id?.length && (
            <svg
              onClick={async () =>
                id?.length ? await deleteInvoice(id) : () => {}
              }
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={styles.trash}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          )}

          <FormInvoice id={id} />
        </>
      }
    />
  );
};
