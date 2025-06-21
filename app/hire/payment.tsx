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

      <Input name="cardNumber" label="Card Number" isDisabled fullWidth />
      <Input name="cardName" label="Card Name" isDisabled fullWidth />
      <Input name="expiry" label="Expiry (YY/MM)" isDisabled fullWidth />
      <Input name="cvv" label="CVV" isDisabled fullWidth />
      <div className="w-full text-center text-l text-default-700 mt-2" title={`Total: R$ ${total},00`}>
        <strong>Preço:</strong> R$ {total},00
      </div>

      <Button color="primary" className="w-full mt-4">
        Continue Payment
      </Button>
    </div>
  );
}

