"use server";

import { DEFAULT_OPTIONS, DEFAULT_URL } from "@/config/fetch";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { InvoiceType } from "../invoices/types";

export async function postInvoice(newInvoice: InvoiceType) {
  try {
    const options = {
      ...DEFAULT_OPTIONS,
      method: "POST",
      body: JSON.stringify(newInvoice),
    };

    const url = `${DEFAULT_URL}invoices`;

    fetch(url, options).then((response) => {
      if (!response.ok) {
        throw new Error("Error to send invoice");
      }
      return response.json();
    });
  } catch (error) {
    throw new Error("Failed post invoice");
  }

  revalidatePath("/");
  redirect(`/`);
}
