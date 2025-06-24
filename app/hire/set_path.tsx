"use client";

import { Autocomplete, AutocompleteItem, Input } from "@heroui/react";
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
  const [pickup, setPickup] = useState("");
  const [delivery, setDelivery] = useState("");
  const [cityInputValue, setCityInputValue] = useState("");

  const filteredCities = cities.filter((city) =>
    city.label.toLowerCase().includes(cityInputValue.toLowerCase())
  );

  useEffect(() => {
    const storedPickup = localStorage.getItem("pickupAddress") || "";
    const storedDelivery = localStorage.getItem("deliveryAddress") || "";
    setPickup(storedPickup);
    setDelivery(storedDelivery);
  }, []);

  useEffect(() => {
    const isValid = pickup.trim() !== "" && delivery.trim() !== "";

    localStorage.setItem("pickupAddress", pickup);
    localStorage.setItem("deliveryAddress", delivery);
    localStorage.setItem("routeCompleted", isValid ? "true" : "false");

    if (isValid) {
      const cost = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
      localStorage.setItem("distanceCost", String(cost));
      setDistanceCost(cost);
    }
  }, [pickup, delivery, setDistanceCost]);

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full max-w-screen-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center">
        Choose Delivery Location
      </h2>

      <Input
        name="pickupAddress"
        label="Pickup Address"
        value={pickup}
        onValueChange={setPickup}
      />
      <Input
        name="deliveryAddress"
        label="Delivery Address"
        value={delivery}
        onValueChange={setDelivery}
      />
    </div>
  );
}
