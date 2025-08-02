import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "AMEX:SPY",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      toolbar_bg: "#f1f3f6",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "tradingview_spy_chart",
    });
    const container = document.getElementById("tradingview_spy_chart");
    container?.appendChild(script);

    return () => {
      container?.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">SPY Chart</h1>
      <div className="w-full h-full" id="tradingview_spy_chart"></div>
    </div>
  );
}
