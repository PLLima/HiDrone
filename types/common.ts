export type Drone = {
    id?: number;
    supplier?: User;
    model?: string;
    city?: string;
    neighborhood?: string;
    image?: string;
    weight?: number;
    size?: string;
    capacity_Weight?: number;
    capacity_Volume?: number;
    composition?: string;
};

export type Order = {
    id?: string;
    client?: User;
    supplier?: User;
    pickupLocation?: string;
    deliveryLocation?: string;
    drone?: Drone;
    paying_method?: "Credit Card" | "Pix" | "Hidrone Credits";
    status?: "Rejected" | "Pending" | "Waiting" | "In Flight" | "Completed";
};

export type User = {
    email?: string;
    password?: string;
    credits?: number;
    // Supplier specific fields
    enterpriseName?: string;
    cnpj?: string;
    // Client specific fields
    name?: string;
    role?: "client" | "supplier";
};

