"use server";
import prisma from '../../lib/prisma';

export type DroneInstanceData = {
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

// Types for filters
export type DroneFilters = {
  city: string | null;
  material: string | null;
  weightCapacity: [number, number];
  volumeCapacity: [number, number];
  droneWeight: [number, number];
};

export async function getDrones() {
  const drones = await prisma.droneInstance.findMany({
    relationLoadStrategy: 'join',
    include: {
        drone_instances: true,
        suppliers: true
    },
  });
  return drones;
}

export async function filterDrones(filters: DroneFilters) {
  const drones = await prisma.droneInstance.findMany({
    relationLoadStrategy: 'join',
    include: {
        drone_instances: true,
        suppliers: true
    },
    where: {
      city: filters.city,
      material: filters.material,
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