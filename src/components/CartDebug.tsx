"use client";

import { useCart } from "../context/CartContext";
import { useState, useEffect } from "react";

export default function CartDebug() {
  const { cart } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
        style={{
            position: "fixed",
            bottom: 0,
            right: 0,
            background: "#1f2937", // dark gray background
            color: "white", // white text for contrast
            padding: "10px",
            maxWidth: "300px",
            fontSize: "12px",
            overflowY: "auto",
            maxHeight: "150px",
            zIndex: 1000,
            borderRadius: "4px",
            boxShadow: "0 0 8px rgba(0,0,0,0.3)",
        }}
    >
        <h2 style={{ margin: "0 0 5px 0", fontSize: "14px" }}>Cart Debug</h2>
      <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
        {JSON.stringify(cart, null, 2)}
      </pre>
    </div>
  );
}
