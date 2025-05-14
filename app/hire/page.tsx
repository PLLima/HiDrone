"use client";

import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, Image } from "@heroui/react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Accordion, AccordionItem } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import {Autocomplete, AutocompleteItem} from "@heroui/react";

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
  model: "Drone Model X",
  neighborhood: "Downtown",
  image: "https://media.craiyon.com/2025-04-15/xk67yE3jTA6QC0-N-CqA4Q.webp",
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
  return (
    <Modal isOpen={isOpen} onOpenChange={(open) => { if (!open) onClose(); }} backdrop="blur">
      <ModalContent>
        <>
          <ModalHeader className="text-2xl font-bold">Drone Details</ModalHeader>
          <ModalBody>
            <p className="text-lg">Selected Drone ID: {droneId}</p>
          </ModalBody>
          <Button onPress={onClose} className="mt-4" color="primary">
            Close
          </Button>
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
