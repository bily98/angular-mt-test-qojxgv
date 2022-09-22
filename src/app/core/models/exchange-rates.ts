export interface ExchangeRates {
  success: boolean;
  timestamp: number;
  base: string;
  date: Date;
  rates: Record<string, number>;
}
