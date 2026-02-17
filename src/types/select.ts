export type PaymentMethod = "card" | "upi" | "cash";

export type SelectOption<T = string> = {
  value: T;
  label: string;
};

export type PaymentOption = {
  value: PaymentMethod;
  label: string;
  requiresGateway: boolean;
};
