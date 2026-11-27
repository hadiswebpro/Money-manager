export type CurrencyCode = "IRR" | "IRT" | "USD" | "EUR";

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  fractionDigits: number;
}
