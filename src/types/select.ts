export type PaymentMethod = "card" | "upi" | "cash";
export type PublishStatus = "draft" | "published" | "archived";
export type ActiveStatus = "active" | "inactive";
export type PublishStatusLabel = "Draft" | "Published" | "Archived";

export type SelectOption<S = string, L = string> = {
  value: S;
  label: L;
};

export type PaymentOption = {
  value: PaymentMethod;
  label: string;
  requiresGateway: boolean;
};
