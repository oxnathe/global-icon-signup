import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CurrencyContext = createContext(null);

const currencyOptions = [
  { code: "USD", symbol: "$" },
  { code: "NGN", symbol: "₦" },
];

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(() => {
    return localStorage.getItem("global-icon-currency") || "USD";
  });

  useEffect(() => {
    localStorage.setItem("global-icon-currency", currency);
  }, [currency]);

  const currencyData = useMemo(() => {
    return (
      currencyOptions.find((item) => item.code === currency) ||
      currencyOptions[0]
    );
  }, [currency]);

  const value = {
    currency,
    setCurrency,
    symbol: currencyData.symbol,
    currencies: currencyOptions,
  };

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);

  if (!context) {
    throw new Error(
      "useCurrency must be used inside a CurrencyProvider"
    );
  }

  return context;
}