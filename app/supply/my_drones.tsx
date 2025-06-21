"use client";

import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Image,
} from "@heroui/react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Accordion, AccordionItem } from "@heroui/react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@heroui/table";
import { Slider } from "@heroui/react";
import { PlusIcon } from "@/components/icons";
import { Input } from "@heroui/react";

import {
  DroneFilters,
  DroneInstanceData,
  getDrones,
} from "@/app/server/supply";

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

export const materials = [
  { label: "Carbon Fiber", key: "carbon_fiber" },
  { label: "Aluminum", key: "aluminum" },
  { label: "Plastic", key: "plastic" },
  { label: "Steel", key: "steel" },
  { label: "Titanium", key: "titanium" },
];

// Mock data for drones (same data for all drones for now)
const mockDrones = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  supplier: "Drone Supplier Inc.",
  model: "Drone Model X",
  city: "New York",
  neighborhood: "Downtown",
  image: "/drone.png",
  drone_weight: 2.5,
  drone_dimentions: "2x2x2",
  weight_capacity: 1.5,
  volume_capacity: 2,
  material: "Carbon Fiber",
}));

// Drone Card Component
const DroneCard = ({
  drone,
  onClick,
}: {
  drone: DroneInstanceData;
  onClick: (id: number) => void;
}) => {
  return (
    <Card
      isHoverable
      isPressable
      onPress={() => onClick(drone.id)}
      className="w-full h-full cursor-pointer"
    >
      <CardHeader className="p-0">
        <Image
          alt={drone.model}
          className="w-full aspect-square object-cover rounded-xl"
          src={drone.image}
        />
      </CardHeader>
      <CardBody className="p-4">
        <h3 className="text-lg font-bold">{drone.model}</h3>
        <p className="text-sm text-default-500">
          {drone.neighborhood
            ? drone.city.concat(", ", drone.neighborhood)
            : drone.city}
        </p>
      </CardBody>
    </Card>
  );
};

// Card for adding a new drone
const AddDroneCard = ({ onClick }: { onClick: () => void }) => {
  return (
    <Card
      isHoverable
      isPressable
      className="w-full h-full cursor-pointer"
      onPress={onClick}
    >
      <CardHeader className="p-0 flex justify-center items-center">
        <PlusIcon className="w-2/3 aspect-square object-cover rounded-xl" />
      </CardHeader>
      <CardBody className="p-4 text-center">
        <h3 className="text-lg font-bold">Add New Drone</h3>
        <p className="text-sm text-default-500">Click to add a new drone</p>
      </CardBody>
    </Card>
  );
};

// Drone Details Modal Component
const DroneDetailsModal = ({
  isOpen,
  onClose,
  drones,
  droneId,
}: {
  isOpen: boolean;
  onClose: () => void;
  drones: DroneInstanceData[] | null;
  droneId: number | null;
}) => {
  if (!drones) return null;

  // Find the selected drone data
  const drone = drones.find((d) => d.id === droneId);

  if (!drone) return null; // If no drone is selected, return nothing

  // Prepare rows for the table
  const rows = [
    { name: "Model", value: drone.model },
    {
      name: "Region",
      value: drone.neighborhood
        ? drone.city.concat(", ", drone.neighborhood)
        : drone.city,
    },
    { name: "Weight Capacity", value: `${drone.weight_capacity} kg` },
    { name: "Volume Capacity", value: `${drone.volume_capacity} L` },
    { name: "Drone Weight", value: `${drone.drone_weight} kg` },
    { name: "Drone Dimensions", value: `${drone.drone_dimentions} (m)` },
    { name: "Material", value: drone.material },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      backdrop="blur"
    >
      <ModalContent>
        <>
          {/* Modal Header */}
          <ModalHeader className="text-2xl font-bold text-center">
            Drone Details
          </ModalHeader>

          {/* Modal Body */}
          <ModalBody className="flex flex-col items-center gap-6">
            {/* Drone Image */}
            <img
              src={drone.image}
              alt={drone.model}
              className="w-full max-w-md h-auto rounded-lg object-cover"
            />

            {/* Drone Details Table */}
            <Table
              aria-label="Drone Details Table"
              className="w-full max-w-md"
              isStriped
              hideHeader
              removeWrapper
            >
              <TableHeader>
                <TableColumn>Name</TableColumn>
                <TableColumn>Value</TableColumn>
              </TableHeader>
              <TableBody items={rows}>
                {(item) => (
                  <TableRow key={item.name}>
                    <TableCell className="font-bold">{item.name}</TableCell>
                    <TableCell>{item.value}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </ModalBody>

          {/* Modal Footer */}
          <div className="flex justify-center gap-4 p-4">
            <div className="flex w-full gap-4">
              <Button
                onPress={onClose}
                color="danger"
                variant="light"
                className="flex-[0.5]"
              >
                Cancel
              </Button>
              <Button
                onPress={() => alert(`Drone ${drone.id} chosen!`)}
                color="primary"
                className="flex-[1.5]"
              >
                Choose this Drone
              </Button>
            </div>
          </div>
        </>
      </ModalContent>
    </Modal>
  );
};

// Modal for adding a new drone
// Drone Details Modal Component
const AddDroneModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const drone = mockDrones[0]; // Use the first drone as a template for the modal

  // Prepare rows for the table
  const rows = [
    { name: "Weight Capacity", value: `${drone.weight_capacity} kg` },
    { name: "Volume Capacity", value: `${drone.volume_capacity} L` },
    { name: "Drone Weight", value: `${drone.drone_weight} kg` },
    { name: "Drone Dimensions", value: `${drone.drone_dimentions} (m)` },
    { name: "Material", value: drone.material },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      backdrop="blur"
    >
      <ModalContent>
        <>
          {/* Modal Header */}
          <ModalHeader className="text-2xl font-bold text-center">
            Add Drone
          </ModalHeader>

          {/* Modal Body */}
          <ModalBody className="flex flex-col items-center gap-6">
            {/* Drone Image */}
            <img
              src={drone.image}
              alt={drone.model}
              className="w-full max-w-md h-auto rounded-lg object-cover"
            />

            {/* Drone Form*/}
            <div className="flex flex-col gap-4 w-full max-w-md">
              {/* Model Autocomplete */}
              <Autocomplete
                label="Model"
                defaultSelectedKey={drone.model}
                className="w-full"
                // You can provide a list of models if available, here using mockDrones for demonstration
              >
                {["Drone Model X", "Drone Model Y", "Drone Model Z"].map(
                  (model) => (
                    <AutocompleteItem key={model}>{model}</AutocompleteItem>
                  )
                )}
              </Autocomplete>

              {/* Region Input */}
              <Input label="City" type="city" />
              <Input label="Neighborhood" type="neighborhood" />
            </div>

            {/* Drone Details Table */}
            <Table
              aria-label="Drone Details Table"
              className="w-full max-w-md"
              isStriped
              hideHeader
              removeWrapper
              topContent={
                <span className="text-lg font-semibold w-full text-center block">
                  Model Info:
                </span>
              }
            >
              <TableHeader>
                <TableColumn>Name</TableColumn>
                <TableColumn>Value</TableColumn>
              </TableHeader>
              <TableBody items={rows}>
                {(item) => (
                  <TableRow key={item.name}>
                    <TableCell className="font-bold">{item.name}</TableCell>
                    <TableCell>{item.value}</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </ModalBody>

          {/* Modal Footer */}
          <div className="flex justify-center gap-4 p-4">
            <div className="flex w-full gap-4">
              <Button
                onPress={onClose}
                color="danger"
                variant="light"
                className="flex-[0.5]"
              >
                Cancel
              </Button>
              <Button
                onPress={() => alert(`Drone ${drone.id} chosen!`)}
                color="primary"
                className="flex-[1.5]"
              >
                Add this Drone
              </Button>
            </div>
          </div>
        </>
      </ModalContent>
    </Modal>
  );
};

// Default filter values
const defaultFilters: DroneFilters = {
  city: null,
  material: null,
  weightCapacity: [0, 100],
  volumeCapacity: [0, 100],
  droneWeight: [0, 100],
};

// Utility functions for localStorage
const loadFiltersFromLocalStorage = (): DroneFilters => {
  const storedFilters = localStorage.getItem("droneFilters");
  return storedFilters ? JSON.parse(storedFilters) : defaultFilters;
};

const saveFiltersToLocalStorage = (filters: DroneFilters) => {
  localStorage.setItem("droneFilters", JSON.stringify(filters));
};

// Main Search Drones Page
export function MyDronesPage() {
  const [filters, setFilters] = useState<DroneFilters>(defaultFilters);
  const [selectedDroneId, setSelectedDroneId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isADModalOpen, setIsADModalOpen] = useState(false);
  const [drones, setDrones] = useState<DroneInstanceData[] | null>(null);

  // Runs on every page request (server-side)
  // useEffect(() => {
  //   async function load() {
  //     const drones = await getDrones();
  //     setDrones(drones);
  //   }
  //   load()
  // }
  // , [])

  // Load filters when the accordion is opened
  const handleAccordionOpen = () => {
    const storedFilters = loadFiltersFromLocalStorage();
    setFilters(storedFilters);
  };

  // Handle filter changes
  const handleFilterChange = (key: keyof DroneFilters, value: any) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters);
    saveFiltersToLocalStorage(updatedFilters);
  };

  // Handle "Apply Filters" button
  const handleApplyFilters = () => {
    alert(`Applied Filters:\n${JSON.stringify(filters, null, 2)}`); // Debug popup
  };

  // Handle "Reset Filters" button
  const handleResetFilters = () => {
    saveFiltersToLocalStorage(defaultFilters);
    setFilters(defaultFilters);
  };

  const handleCardClick = (id: number) => {
    setSelectedDroneId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDroneId(null);
  };

  const handleAddDroneClick = () => {
    setIsADModalOpen(true);
  };

  const handleCloseAddDroneModal = () => {
    setIsADModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full max-w-screen-2xl mx-auto">
      {/* Filters Accordion */}
      {/* @ts-ignore: Suppress TypeScript error */}
      <Accordion variant="shadow" className="w-full max-w-6xl" onOpenChange={handleAccordionOpen} >
        <AccordionItem title="Filters">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* City Filter */}
              <Autocomplete
                className="max-w-xs"
                label="City"
                selectedKey={filters.city}
                onSelectionChange={(key) =>
                  handleFilterChange("city", key as string)
                }
              >
                {cities.map((city) => (
                  <AutocompleteItem key={city.key}>
                    {city.label}
                  </AutocompleteItem>
                ))}
              </Autocomplete>

              {/* Material Filter */}
              <Autocomplete
                className="max-w-xs"
                label="Material"
                selectedKey={filters.material}
                onSelectionChange={(key) =>
                  handleFilterChange("material", key as string)
                }
              >
                {materials.map((material) => (
                  <AutocompleteItem key={material.key}>
                    {material.label}
                  </AutocompleteItem>
                ))}
              </Autocomplete>

              {/* Weight Capacity Filter */}
              <Slider
                className="max-w-md"
                value={filters.weightCapacity}
                label="Weight Capacity (kg)"
                maxValue={100}
                minValue={0}
                step={0.1}
                onChange={(value) =>
                  handleFilterChange(
                    "weightCapacity",
                    value as [number, number]
                  )
                }
              />

              {/* Volume Capacity Filter */}
              <Slider
                className="max-w-md"
                value={filters.volumeCapacity}
                label="Volume Capacity (l)"
                maxValue={100}
                minValue={0}
                step={0.1}
                onChange={(value) =>
                  handleFilterChange(
                    "volumeCapacity",
                    value as [number, number]
                  )
                }
              />

              {/* Drone Weight Filter */}
              <Slider
                className="max-w-md"
                value={filters.droneWeight}
                label="Drone Weight (kg)"
                maxValue={100}
                minValue={0}
                step={0.1}
                onChange={(value) =>
                  handleFilterChange("droneWeight", value as [number, number])
                }
              />
            </div>

            {/* Buttons at the bottom */}
            <div className="flex justify-end mt-4">
              <Button
                variant="light"
                color="danger"
                className="mr-4"
                onPress={handleResetFilters}
              >
                Reset Filters
              </Button>
              <Button
                variant="solid"
                color="primary"
                onPress={handleApplyFilters}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </AccordionItem>
      </Accordion>

      {/* Drone Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
        <AddDroneCard onClick={handleAddDroneClick} />
        {mockDrones.map((drone) => (
          <DroneCard key={drone.id} drone={drone} onClick={handleCardClick} />
        ))}
      </div>

      {/* Drone Details Modal */}
      <DroneDetailsModal
        drones={mockDrones}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        droneId={selectedDroneId}
      />
      <AddDroneModal
        isOpen={isADModalOpen}
        onClose={handleCloseAddDroneModal}
      />
    </div>
  );
}
