"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ButtonCheckout from "@/components/ButtonCheckout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface Product {
  id: string;
  name: string;
  description?: string;
  active: boolean;
}

interface Price {
  id: string;
  nickname: string;
  unit_amount: number;
  currency: string;
  product?: Product;
}

export default function Product() {
  const searchParams = useSearchParams();
  const tipo = searchParams.get("tipo");

  const [prices, setPrices] = useState<Price[]>([]);
  const [selectedPrice, setSelectedPrice] = useState("");

  useEffect(() => {
    if (!tipo) return;

    const fetchPrices = async () => {
      try {
        const res = await fetch(`/api/prices?tipo=${tipo}`);
        const precios = await res.json();
        setPrices(precios);
        if (precios.length > 0) setSelectedPrice(precios[0].id);
      } catch (error) {
        console.error("Error al traer precios:", error);
      }
    };

    fetchPrices();
  }, [tipo]);

  const precio1Mes = prices.find(
    p =>
      p.product?.name.toLowerCase().includes("1 mes") ||
      p.product?.description?.toLowerCase().includes("1 mes")
  );

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-6 gap-10 text-center ${inter.className}`}
    >
   <h1 className="text-3xl md:text-4xl font-bold italic text-white pt-10 flex items-center justify-center gap-4">
  <img
    src="/leopard-claw.png"
    alt="Logo garras"
    className="w-16 h-16 object-contain drop-shadow-lg"
  />
  ASESORÍA {tipo?.toUpperCase()}
</h1>

      {/* CARD */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center gap-6 transition-all duration-300">
        <h2 className="text-xl font-semibold text-gray-900">
          Selecciona tu plan
        </h2>

        {/* Precio fijo 1 mes */}
        {precio1Mes && (
          <h3 className="text-lg font-medium text-gray-700">
            {(precio1Mes.unit_amount / 100).toLocaleString("es-AR", {
              style: "currency",
              currency: precio1Mes.currency.toUpperCase(),
            })}{" "}
            / 1 mes
          </h3>
        )}

        {/* SELECT de frecuencia */}
        <select
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
        >
          {prices.map((price) => (
            <option key={price.id} value={price.id}>
              {price.product?.description
                ? `${price.product.description} - ARS ${(price.unit_amount / 100).toLocaleString("es-AR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`
                : `ARS ${(price.unit_amount / 100).toLocaleString("es-AR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}`}
            </option>
          ))}
        </select>

        {/* BOTÓN checkout */}
        {selectedPrice && (
          <div className="w-full">
            <ButtonCheckout priceId={selectedPrice} />
          </div>
        )}
      </div>
    </div>
  );
}