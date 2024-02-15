"use client";

import { Button, Drawer } from "@/features/ui";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FormInvoice } from "./form-invoice";

export const DrawerInvoice = () => {
  const router = useRouter()
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  const [openDrawer, setOpenDrawer] = useState(id?.length || false);

  const handleOpen = () => setOpenDrawer(true);
  const handleClose = () => {setOpenDrawer(false); router.push('/')};

  useEffect(() => {
    if (!id?.length) return;

    handleOpen();
  }, [id]);

  return (
    <Drawer
      close={handleClose}
      isOpen={openDrawer}
      trigger={<Button onClick={handleOpen} label="New invoice" />}
      content={<FormInvoice />}
    />
  );
};
