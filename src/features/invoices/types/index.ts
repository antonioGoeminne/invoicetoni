export type statusType = "draft" | "paid" | "pending";

export interface InvoiceType {
  _id: string;
  client_name?: string;
  client_email?: string;
  due_date: Date | null;
  created_date: Date | null;
  total_amount: number | undefined;
  status: statusType;
}
