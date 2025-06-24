"use client";

import { Input } from "@heroui/react";
import { useState, useEffect } from "react";

export const cities = [
  { label: "São Paulo", key: "sao_paulo" },
  { label: "Rio de Janeiro", key: "rio_de_janeiro" },
  { label: "Belo Horizonte", key: "belo_horizonte" },
  { label: "Brasília", key: "brasilia" },
  { label: "Salvador", key: "salvador" },
  { label: "Curitiba", key: "curitiba" },
  { label: "Fortaleza", key: "fortaleza" },
  { label: "Recife", key: "recife" },
  { label: "Porto Alegre", key: "porto_alegre" },
  { label: "Manaus", key: "manaus" },
  { label: "Belém", key: "belem" },
  { label: "Goiânia", key: "goiania" },
  { label: "Florianópolis", key: "florianopolis" },
];

export function SetPath({
  goToPayment,
  selectedDroneId,
  setDistanceCost,
}: {
  goToPayment: () => void;
  selectedDroneId: number | null;
  setDistanceCost: (cost: number) => void;
}) {
  // Inicializa o estado lendo direto do localStorage (lazy init)
  const [pickup, setPickup] = useState(() => localStorage.getItem("pickupLocation") || "");
  const [delivery, setDelivery] = useState(() => localStorage.getItem("deliveryLocation") || "");

  // Sincroniza localStorage sempre que pickup ou delivery mudarem
  useEffect(() => {
    localStorage.setItem("pickupLocation", pickup);
    localStorage.setItem("deliveryLocation", delivery);

    const isValid = pickup.trim() !== "" && delivery.trim() !== "";
    localStorage.setItem("routeCompleted", isValid ? "true" : "false");

    if (isValid) {
      const cost = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
      localStorage.setItem("distanceCost", cost.toString());
      setDistanceCost(cost);
    } else {
      localStorage.removeItem("distanceCost");
      setDistanceCost(0);
    }
  }, [pickup, delivery, setDistanceCost]);

  // Atualiza estado se localStorage mudar em outra aba
  useEffect(() => {
    function onStorageChange(event: StorageEvent) {
      if (event.key === "pickupLocation") setPickup(event.newValue || "");
      if (event.key === "deliveryLocation") setDelivery(event.newValue || "");
      if (event.key === "distanceCost") setDistanceCost(event.newValue ? parseInt(event.newValue) : 0);
    }
    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  }, [setDistanceCost]);

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full max-w-screen-2xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-center">Choose Delivery Location</h2>

      <Input
        name="pickupAddress"
        label="Pickup Address"
        value={pickup}
        onValueChange={setPickup}
        fullWidth
      />
      <Input
        name="deliveryAddress"
        label="Delivery Address"
        value={delivery}
        onValueChange={setDelivery}
        fullWidth
      />
    </div>
  );
}
