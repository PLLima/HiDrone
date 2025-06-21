"use client";

import { Input, Button } from "@heroui/react";

export default function Payment({
    droneId,
    distanceCost,
}: {
    droneId: number | null;
    distanceCost: number;
}) {
    
    const basePrice = droneId ? droneId * 10 : 0;
    const total = basePrice + distanceCost;
  
    return (
    <div className="flex flex-col items-center justify-center gap-6 w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center">Payment</h2>

      <Input name="cardNumber" label="Card Number" fullWidth />
      <Input name="cardName" label="Card Name" fullWidth />
      <Input name="expiry" label="Expiry (YY/MM)" fullWidth />
      <Input name="cvv" label="CVV" fullWidth />
      <Input name="price" label="Price" isReadOnly value={`R$ ${total},00`} fullWidth />

      <Button color="primary" className="w-full mt-4">
        Continue Payment
      </Button>
    </div>
  );
}

