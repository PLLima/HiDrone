"use client";

import { Input, Button } from "@heroui/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Payment({
  droneId,
  distanceCost,
}: {
  droneId: number | null;
  distanceCost: number;
}) {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [routeCompleted, setRouteCompleted] = useState(false);
  const [clientName, setClientName] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const savedMethod = localStorage.getItem("paymentMethod");
    if (savedMethod) setPaymentMethod(savedMethod);

    const routeFlag = localStorage.getItem("routeCompleted");
    setRouteCompleted(routeFlag === "true");

    const storedClientName = localStorage.getItem("logged_name_debug");
    if (storedClientName) setClientName(storedClientName);

    function handleStorageChange(event: StorageEvent) {
      if (event.key === "logged_name_debug") setClientName(event.newValue);
      if (event.key === "paymentMethod") setPaymentMethod(event.newValue);
      if (event.key === "routeCompleted") setRouteCompleted(event.newValue === "true");
    }

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const basePrice = droneId ? droneId * 10 : 0;
  const total = basePrice + distanceCost;

  const canProceed =
    droneId !== null &&
    routeCompleted === true &&
    paymentMethod !== null &&
    paymentMethod.trim() !== "" &&
    clientName !== null &&
    clientName.trim() !== "";

  function handleConfirmPayment() {
    if (!canProceed) return;

    const pickupLocation = localStorage.getItem("pickupLocation");
    const deliveryLocation = localStorage.getItem("deliveryLocation");

    if (!droneId || !pickupLocation || !deliveryLocation || !clientName || !paymentMethod) {
      alert("Missing some order information.");
      return;
    }

    const newOrder = {
      id: crypto.randomUUID(),
      clientName,
      pickupLocation,
      deliveryLocation,
      droneModel: `Drone ${droneId}`,
      status: "Pending",
      paymentMethod,
      totalPrice: total,
    };

    localStorage.setItem("currentOrder", JSON.stringify(newOrder));

    alert("Order confirmed!");

    router.push("/order"); // <-- redireciona para a página de status
  }

  if (!paymentMethod) {
    return (
      <div className="text-center mt-8">
        <p className="text-lg text-default-700">Please select a payment method first.</p>
      </div>
    );
  }

  if (!clientName) {
    return (
      <div className="text-center mt-8">
        <p className="text-lg text-default-700">User not logged in. Please log in first.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full max-w-md mx-auto px-4">
      <h2 className="text-2xl font-bold text-center">Payment</h2>

      {paymentMethod === "creditCard" && (
        <>
          <Input name="cardNumber" label="Card Number" fullWidth />
          <Input name="cardName" label="Card Name" fullWidth />
          <Input name="expiry" label="Expiry (YY/MM)" fullWidth />
          <Input name="cvv" label="CVV" fullWidth />
        </>
      )}

      {paymentMethod === "pix" && (
        <div className="text-center w-full mt-4">
          <p className="text-lg mb-4">A QR code will be generated to pay with Pix.</p>
          <div className="inline-block border border-gray-300 rounded-lg p-4 bg-white shadow-md">
            <Image
              src="/qr_code.png"
              alt="QR Code"
              width={200}
              height={200}
              style={{ display: "block" }}
            />
          </div>
        </div>
      )}

      {paymentMethod === "siteCredit" && (
        <div className="text-center">
          <p className="text-lg">Using your site credit balance for this payment.</p>
        </div>
      )}

      <div
        className="w-full text-center text-l text-default-700 mt-4"
        title={`Total: R$ ${total},00`}
      >
        <strong>Price:</strong> R$ {total},00
      </div>

      <Button
        color="primary"
        className="w-full mt-4"
        isDisabled={!canProceed}
        onClick={handleConfirmPayment}
      >
        Confirm Payment
      </Button>
    </div>
  );
}
