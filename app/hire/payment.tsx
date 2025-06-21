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
      <h2 className="text-2xl font-bold text-center">Pagamento</h2>

      <Input name="cardNumber" label="Número do Cartão" fullWidth />
      <Input name="cardName" label="Nome no Cartão" fullWidth />
      <Input name="expiry" label="Validade (MM/AA)" fullWidth />
      <Input name="cvv" label="CVV" fullWidth />
      <Input name="price" label="Preço" isReadOnly value={`R$ ${total},00`} fullWidth />

      <Button color="primary" className="w-full mt-4">
        Confirmar Pagamento
      </Button>
    </div>
  );
}

