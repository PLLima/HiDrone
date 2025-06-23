export type Drone = {
  id: number;
  supplier: string;
  model: string;
  city: string;
  neighborhood: string;
  image: string;
  drone_weight: number;
  drone_dimentions: string;
  weight_capacity: number;
  volume_capacity: number;
  material: string;
};

export type Order = {
  id: string;
  clientName: string;
  pickupLocation: string;
  deliveryLocation: string;
  droneModel: string;
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

