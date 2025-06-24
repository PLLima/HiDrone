"use client";

import React, { useState, useEffect, Key } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  Image,
  select,
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
  addDroneToSupplier,
  DroneFilterLimits,
  DroneFilters,
  DroneInstanceData,
  DroneModelData,
  getDroneModels,
  getDrones,
  getSupplierDrones,
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
    { name: "Weight Capacity", value: `${drone.capacityWeight} kg` },
    { name: "Volume Capacity", value: `${drone.capacityVolume} L` },
    { name: "Drone Weight", value: `${drone.weight} kg` },
    { name: "Drone Dimensions", value: `${drone.size} (m)` },
    { name: "Material", value: drone.composition },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      backdrop="blur"
      hideCloseButton
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
              <Button onPress={onClose} color="primary" className="w-full">
                Close Details
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
  droneModels,
  onClose,
}: {
  isOpen: boolean;
  droneModels: DroneModelData[] | null;
  onClose: () => void;
}) => {
  // No drone models to add from!
  if (!droneModels) return null;

  // State for selected model
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedModel, setSelectedModel] = useState<DroneModelData>(
    droneModels[0]
  );
  const [addedNeighborhood, setAddedNeighborhood] = useState<string>("");
  const [addedCity, setAddedCity] = useState<string>("");

  // Prepare rows for the table
  let rows = [
    { name: "Weight Capacity", value: `${selectedModel.capacityWeight} kg` },
    { name: "Volume Capacity", value: `${selectedModel.capacityVolume} L` },
    { name: "Drone Weight", value: `${selectedModel.weight} kg` },
    { name: "Drone Dimensions", value: `${selectedModel.size} (m)` },
    { name: "Material", value: selectedModel.composition },
  ];

  // Handle selection change
  const handleSelectionChange = (key: number) => {
    setSelectedModel(droneModels[key]);
    rows = [
      {
        name: "Weight Capacity",
        value: `${droneModels[key].capacityWeight} kg`,
      },
      {
        name: "Volume Capacity",
        value: `${droneModels[key].capacityVolume} L`,
      },
      { name: "Drone Weight", value: `${droneModels[key].weight} kg` },
      { name: "Drone Dimensions", value: `${droneModels[key].size} (m)` },
      { name: "Material", value: droneModels[key].composition },
    ];
  };

  const handleAddDrone = async () => {
    setIsLoading(true);
    const formattedDroneData: DroneInstanceData = {
      supplier: localStorage.getItem("cnpj_debug") as string,
      id: selectedModel.id,
      model: selectedModel.model,
      city: addedCity,
      neighborhood: addedNeighborhood,
      image: selectedModel.image,
      weight: selectedModel.weight,
      size: selectedModel.size,
      capacityWeight: selectedModel.capacityWeight,
      capacityVolume: selectedModel.capacityVolume,
      composition: selectedModel.composition,
    };
    await addDroneToSupplier(formattedDroneData);
    setIsLoading(false);
    window.location.reload();
  };

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
              src={selectedModel.image}
              alt={selectedModel.model}
              className="w-full max-w-md h-auto rounded-lg object-cover"
            />

            {/* Drone Form*/}
            <div className="flex flex-col gap-4 w-full max-w-md">
              {/* Model Autocomplete */}
              <Autocomplete
                label="Model"
                defaultSelectedKey={droneModels[0].id}
                defaultInputValue={droneModels[0].model}
                className="w-full"
                defaultItems={droneModels}
                onSelectionChange={(key) =>
                  handleSelectionChange((key as number) - 1)
                }
              >
                {(droneModel) => (
                  <AutocompleteItem key={droneModel.id}>
                    {droneModel.model}
                  </AutocompleteItem>
                )}
              </Autocomplete>

              {/* Region Input */}
              <Input label="City" type="city" onValueChange={setAddedCity} />
              <Input
                label="Neighborhood"
                type="neighborhood"
                onValueChange={setAddedNeighborhood}
              />
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
                isLoading={isLoading}
                onPress={handleAddDrone}
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

// Main Search Drones Page
export function MyDronesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [filterLimits, setFilterLimits] = useState<DroneFilterLimits | null>(
    null
  );
  const [defaultFilters, setDefaultFilters] = useState<DroneFilters | null>(
    null
  );
  const [filters, setFilters] = useState<DroneFilters | null>(null);
  const [selectedDroneId, setSelectedDroneId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isADModalOpen, setIsADModalOpen] = useState(false);
  const [drones, setDrones] = useState<DroneInstanceData[] | null>(null);
  const [droneModels, setDroneModels] = useState<DroneModelData[] | null>(null);

  // Runs on every page request (server-side)
  useEffect(() => {
    async function load() {
      // Get supplier drones
      const drones = await getSupplierDrones(
        localStorage.getItem("cnpj_debug") as string
      );
      // Format drone instances
      const droneInstances = drones
        .map((drone) => {
          return {
            id: drone.id,
            model: drone.model.model,
            image: drone.model.image,
            size: drone.model.size,
            composition: drone.model.composition,
            weight: drone.model.weight,
            capacityWeight: drone.model.capacityWeight,
            capacityVolume: drone.model.capacityVolume,
            supplier: drone.supplier.name,
            city: drone.region.city,
            neighborhood: drone.region.neighborhood,
          };
        })
        .sort((a: any, b: any) => a.id - b.id);
      setDrones(droneInstances);

      // Calculate filter limits
      const filterLimits = calculateFilterLimits(droneInstances);
      setFilterLimits(filterLimits);

      // Set default filters
      setDefaultFilters({
        city: null,
        composition: null,
        weightCapacity: [
          filterLimits.weightCapacityLimits[0],
          filterLimits.weightCapacityLimits[1],
        ],
        volumeCapacity: [
          filterLimits.weightCapacityLimits[0],
          filterLimits.volumeCapacityLimits[1],
        ],
        droneWeight: [
          filterLimits.weightCapacityLimits[0],
          filterLimits.droneWeightLimits[1],
        ],
      });
      setIsLoading(false);
    }
    load();
  }, []);

  const calculateFilterLimits = (
    drones: DroneInstanceData[]
  ): DroneFilterLimits => {
    if (!drones) {
      return {
        cities: [],
        compositions: [],
        weightCapacityLimits: [0, 0],
        volumeCapacityLimits: [0, 0],
        droneWeightLimits: [0, 0],
      };
    }

    // Get list of available cities
    const cities =
      drones?.map((drone) => {
        return {
          label: drone.city,
          key: drone.city
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "_")
            .toLocaleLowerCase(),
        };
      }) ?? [];
    const compositions = drones?.map((drone) => {
      return {
        label: drone.composition,
        key: drone.composition
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/\s+/g, "_")
          .toLocaleLowerCase(),
      };
    }) ?? [];

    // Calculate min and max weight, volume, and weight capacity
    const weights = drones?.map((drone) => drone.weight) ?? [];
    const minWeight = Math.min(...weights);
    const maxWeight = Math.max(...weights);
    const capacityVolumes = drones?.map((drone) => drone.capacityVolume) ?? [];
    const minCapacityVolume = Math.min(...capacityVolumes);
    const maxCapacityVolume = Math.max(...capacityVolumes);
    const capacityWeights = drones?.map((drone) => drone.capacityWeight) ?? [];
    const minCapacityWeight = Math.min(...capacityWeights);
    const maxCapacityWeight = Math.max(...capacityWeights);

    return {
      cities: Array.from(new Set(cities)),
      compositions: Array.from(new Set(compositions)),
      weightCapacityLimits: [minCapacityWeight, maxCapacityWeight],
      volumeCapacityLimits: [minCapacityVolume, maxCapacityVolume],
      droneWeightLimits: [minWeight, maxWeight],
    };
  };

  // Utility functions for localStorage
  const loadFiltersFromLocalStorage = (): DroneFilters => {
    const storedFilters = localStorage.getItem("droneFilters");
    return storedFilters ? JSON.parse(storedFilters) : defaultFilters as DroneFilters;
  };

  const saveFiltersToLocalStorage = (filters: DroneFilters) => {
    localStorage.setItem("droneFilters", JSON.stringify(filters));
  };

  // Load filters when the accordion is opened
  const handleAccordionOpen = () => {
    const storedFilters = loadFiltersFromLocalStorage();
    setFilters(storedFilters);
  };

  // Handle filter changes
  const handleFilterChange = (key: keyof DroneFilters, value: any) => {
    const updatedFilters = { ...filters, [key]: value };
    setFilters(updatedFilters as DroneFilters);
    saveFiltersToLocalStorage(updatedFilters as DroneFilters);
  };

  // Handle "Apply Filters" button
  const handleApplyFilters = () => {
    alert(`Applied Filters:\n${JSON.stringify(filters, null, 2)}`); // Debug popup
  };

  // Handle "Reset Filters" button
  const handleResetFilters = () => {
    saveFiltersToLocalStorage(defaultFilters as DroneFilters);
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

  async function handleAddDroneClick() {
    const droneModels = await getDroneModels();
    setDroneModels(droneModels.sort((a: any, b: any) => a.id - b.id));
    setIsADModalOpen(true);
  }

  const handleCloseAddDroneModal = () => {
    setIsADModalOpen(false);
  };

  return (
    !isLoading && (
      <div className="flex flex-col items-center justify-center gap-6 w-full max-w-screen-2xl mx-auto">
        {/* Filters Accordion */}
        {/* @ts-ignore: Suppress TypeScript error */}
        <Accordion variant="shadow" className="w-full max-w-6xl" onOpenChange={handleAccordionOpen}>
          <AccordionItem title="Filters">
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* City Filter */}
                <Autocomplete
                  className="max-w-xs"
                  label="City"
                  selectedKey={(filters as DroneFilters).city}
                  onSelectionChange={(key) =>
                    handleFilterChange("city", key as string)
                  }
                >
                  {(filterLimits?.cities || []).map((city) => (
                    <AutocompleteItem key={city.key}>
                      {city.label}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>

                {/* Composition Filter */}
                <Autocomplete
                  className="max-w-xs"
                  label="Composition"
                  selectedKey={filters?.composition}
                  onSelectionChange={(key) =>
                    handleFilterChange("composition", key as string)
                  }
                >
                  {(filterLimits?.compositions || []).map((composition) => (
                    <AutocompleteItem key={composition.key}>
                      {composition.label}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>

                {/* Weight Capacity Filter */}
                <Slider
                  className="max-w-md"
                  value={filters?.weightCapacity}
                  label="Weight Capacity (kg)"
                  maxValue={filterLimits?.weightCapacityLimits[1] || 0}
                  minValue={filterLimits?.weightCapacityLimits[0] || 0}
                  step={
                    ((filterLimits?.weightCapacityLimits[1] || 0) -
                      (filterLimits?.weightCapacityLimits[0] || 0)) /
                    1000
                  }
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
                  value={filters?.volumeCapacity}
                  label="Volume Capacity (l)"
                  maxValue={filterLimits?.volumeCapacityLimits[1] || 0}
                  minValue={filterLimits?.volumeCapacityLimits[0] || 0}
                  step={
                    ((filterLimits?.volumeCapacityLimits[1] || 0) -
                      (filterLimits?.volumeCapacityLimits[0] || 0)) /
                    1000
                  }
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
                  value={filters?.droneWeight}
                  label="Drone Weight (kg)"
                  maxValue={filterLimits?.droneWeightLimits[1] || 0}
                  minValue={filterLimits?.droneWeightLimits[0] || 0}
                  step={
                    ((filterLimits?.droneWeightLimits[1] || 0) -
                      (filterLimits?.droneWeightLimits[0] || 0)) /
                    1000
                  }
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
          {drones &&
            drones.map((drone) => (
              <DroneCard
                key={drone.id}
                drone={drone}
                onClick={handleCardClick}
              />
            ))}
        </div>

        {/* Drone Details Modal */}
        <DroneDetailsModal
          drones={drones}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          droneId={selectedDroneId}
        />
        <AddDroneModal
          isOpen={isADModalOpen}
          droneModels={droneModels}
          onClose={handleCloseAddDroneModal}
        />
      </div>
    )
  );
}
