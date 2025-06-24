"use server";
import prisma from "../../lib/prisma";

export type DroneModelData = {
  id: number;
  model: string;
  weight: number;
  size: string;
  composition: string;
  image: string;
  capacityVolume: number;
  capacityWeight: number;
};

export type DroneInstanceData = {
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

// Types for filters
export type DroneFilters = {
  city: string | null;
  composition: string | null;
  weightCapacity: [number, number];
  volumeCapacity: [number, number];
  droneWeight: [number, number];
};

export type DroneFilterLimits = {
  cities: {label: string, key: string}[];
  compositions: {label: string, key: string}[];
  weightCapacityLimits: [number, number];
  volumeCapacityLimits: [number, number];
  droneWeightLimits: [number, number];
}

export async function getDroneModels() {
  const models = await (prisma as any).droneModel.findMany();
  return JSON.parse(JSON.stringify(models));
}

export async function getDrones() {
  const drones = await (prisma as any).droneInstance.findMany({
    include: {
      model: {
        select: {
          model: true,
          image: true,
          size: true,
          composition: true,
          weight: true,
          capacityWeight: true,
          capacityVolume: true,
        },
      },
      supplier: {
        select: {
          name: true,
        },
      },
    },
  });
  return JSON.parse(JSON.stringify(drones));
}

export async function getSupplierDrones(supplierCnpj: string) {
  // Don't search for client drones!
  if (!supplierCnpj) {
    return [];
  }
  // Get supplier id
  const supplierData = await (prisma as any).supplier.findUnique({
    select: {
      id: true,
      name: true,
    },
    where: {
      cnpj: supplierCnpj,
    },
  });

  // Get supplier drones
  const supplierDrones = await (prisma as any).droneInstance.findMany({
    include: {
      model: {
        select: {
          model: true,
          image: true,
          size: true,
          composition: true,
          weight: true,
          capacityWeight: true,
          capacityVolume: true,
        },
      },
      supplier: {
        select: {
          name: true,
        },
      },
    },
    where: {
      supplierId: supplierData.id,
    },
  });
  return JSON.parse(JSON.stringify(supplierDrones));
}

export async function filterDrones(filters: DroneFilters) {
  const drones = await (prisma as any).droneInstance.findMany({
    include: {
      droneModelId: true,
      supplierId: true,
    },
    where: {
      city: filters.city,
      material: filters.composition,
      drone_weight: {
        gte: filters.droneWeight ? filters.droneWeight[0] : 0,
        lte: filters.droneWeight ? filters.droneWeight[1] : 10,
      },
      capacityWeight: {
        gte: filters.weightCapacity ? filters.weightCapacity[0] : 0,
        lte: filters.weightCapacity ? filters.weightCapacity[1] : 10,
      },
      capacityVolume: {
        gte: filters.volumeCapacity ? filters.volumeCapacity[0] : 0,
        lte: filters.volumeCapacity ? filters.volumeCapacity[1] : 10,
      },
    },
  });
  return drones;
}

export async function addDroneToSupplier(droneData: DroneInstanceData) {
  // Find the supplier related to cnpj
  const supplier = await (prisma as any).supplier.findUnique({
    where: {
      cnpj: droneData.supplier,
    },
  });
  const supplierId = supplier.id;

  // If the drone instance doesn't exist, create it
  await (prisma as any).droneInstance.create({
    data: {
      modelId: droneData.id,
      supplierId: supplierId,
      region: {
        city: droneData.city,
        neighborhood: droneData.neighborhood,
      },
    },
  });
}
