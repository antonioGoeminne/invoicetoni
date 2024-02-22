export type statusType = "draft" | "paid" | "pending";

export interface InvoiceType {
  _id: string;
  client_name: string;
  client_email: string;
  due_date: string;
  created_date: Date;
  total_amount: number;
  status: statusType;
}
