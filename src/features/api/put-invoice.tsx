"use server";

import { DEFAULT_OPTIONS, DEFAULT_URL } from "@/config/fetch";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { InvoiceType } from "../invoices/types";

export async function putInvoice(newData: InvoiceType) {
  try {
    const options = {
      ...DEFAULT_OPTIONS,
      method: "PUT",
      body: JSON.stringify(newData),
    };

    const url = `${DEFAULT_URL}invoices/${newData._id}`;

    fetch(url, options).then((response) => {
      if (!response.ok) {
        throw new Error("Error to update invoice");
      }
      return response.json();
    });
  } catch (error) {
    throw new Error("Failed post invoice");
  }

  revalidatePath("/");
  redirect(`/`);
}
