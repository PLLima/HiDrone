export type Drone = {
  id: number;
  supplier: string;
  model: string;
  city: string;
  neighborhood: string;
  image: string;
  weight: number;
  size: string;
  capacityWeight: number;
  capacityVolume: number;
  composition: string;
};

export type Order = {
  id: string;
  clientName: string;
  pickupLocation: string;
  deliveryLocation: string;
  droneModel: string;
  paying_method: "Credit Card" | "Pix" | "Hidrone Credits";
  status: "Rejected" | "Pending" | "Waiting" | "In Flight" | "Completed";
};

export type User = {
    email: string;
    password: string;
    credits?: number;
    // Supplier specific fields
    enterpriseName?: string;
    cnpj?: string;
    // Client specific fields
    name?: string;
    role?: "client" | "supplier";
};

