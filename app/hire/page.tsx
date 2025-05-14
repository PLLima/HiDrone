"use client";

import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, Image } from "@heroui/react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Accordion, AccordionItem } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import {Autocomplete, AutocompleteItem} from "@heroui/react";
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@heroui/table";
import { aborted } from "util";

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

// Mock data for drones (same data for all drones for now)
const mockDrones = Array.from({ length: 12 }, (_, index) => ({
  id: `drone-${index + 1}`,
  supplier: "Drone Supplier Inc.",
  model: "Drone Model X",
  neighborhood: "Downtown",
  image: "https://media.craiyon.com/2025-04-15/xk67yE3jTA6QC0-N-CqA4Q.webp",
  drone_weight: "2.5",
  drone_dimentions: "2x2x2",
  weight_capacity: "1.5",
  dimentions_capacity: "2x1x1",
  material: "Carbon Fiber",
}));

// Drone Card Component
const DroneCard = ({ drone, onClick }: { drone: { id: string; model: string; neighborhood: string; image: string }; onClick: (id: string) => void }) => {
  return (
    <Card
      isHoverable
      isPressable                // <-- make it render as a button
      onPress={() => onClick(drone.id)}  // <-- use onPress instead of onClick
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
        <p className="text-sm text-default-500">{drone.neighborhood}</p>
      </CardBody>
    </Card>
  );
};

// Drone Details Modal Component
const DroneDetailsModal = ({ isOpen, onClose, droneId }: { isOpen: boolean; onClose: () => void; droneId: string | null }) => {
  // Find the selected drone data
  const drone = mockDrones.find((d) => d.id === droneId);

  if (!drone) return null; // If no drone is selected, return nothing

  // Prepare rows for the table
  const rows = [
    { name: "Model", value: drone.model },
    { name: "Neighborhood", value: drone.neighborhood },
    { name: "Weight Capacity", value: `${drone.weight_capacity} kg` },
    { name: "Dimensions Capacity", value: `${drone.dimentions_capacity} (m)` },
    { name: "Drone Weight", value: `${drone.drone_weight} kg` },
    { name: "Drone Dimensions", value: `${drone.drone_dimentions} (m)` },
    { name: "Material", value: drone.material },
    { name: "Supplier", value: drone.supplier },
  ];

  return (
    <Modal isOpen={isOpen} onOpenChange={(open) => { if (!open) onClose(); }} backdrop="blur">
      <ModalContent>
        <>
          {/* Modal Header */}
          <ModalHeader className="text-2xl font-bold text-center">Drone Details</ModalHeader>

          {/* Modal Body */}
          <ModalBody className="flex flex-col items-center gap-6">
            {/* Drone Image */}
            <img
              src={drone.image}
              alt={drone.model}
              className="w-full max-w-md h-auto rounded-lg object-cover"
            />

            {/* Drone Details Table */}
            <Table aria-label="Drone Details Table" className="w-full max-w-md" isStriped hideHeader removeWrapper>
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
                <Button onPress={onClose} color="danger" variant="light" className="flex-[0.5]">
                Cancel
                </Button>
                <Button onPress={() => alert(`Drone ${drone.id} chosen!`)} color="primary" className="flex-[1.5]">
                Choose this Drone
                </Button>
            </div>
          </div>
        </>
      </ModalContent>
    </Modal>
  );
};

// Main Search Drones Page
export default function SearchDronesPage() {
  const [selectedDroneId, setSelectedDroneId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (id: string) => {
    setSelectedDroneId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDroneId(null);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-6 py-8 px-6 w-full max-w-screen-2xl mx-auto">
      {/* Page Title */}
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({})}>Find Drones&nbsp;</span>
        <br />
      </div>

      {/* Filters Accordion */}
      <Accordion variant="shadow" className="w-full max-w-6xl">
        <AccordionItem title="Filters">
          <Autocomplete className="max-w-xs" label="City">
            {cities.map((animal) => (
              <AutocompleteItem key={animal.key}>{animal.label}</AutocompleteItem>
            ))}
          </Autocomplete>
        </AccordionItem>
      </Accordion>

      {/* Drone Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
        {mockDrones.map((drone) => (
          <DroneCard key={drone.id} drone={drone} onClick={handleCardClick} />
        ))}
      </div>

      {/* Drone Details Modal */}
      <DroneDetailsModal isOpen={isModalOpen} onClose={handleCloseModal} droneId={selectedDroneId} />
    </section>
  );
}
