"use client";

import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, Image } from "@heroui/react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Accordion, AccordionItem } from "@heroui/react";

// Mock data for drones (same data for all drones for now)
const mockDrones = Array.from({ length: 12 }, (_, index) => ({
  id: `drone-${index + 1}`,
  model: "Drone Model X",
  neighborhood: "Downtown",
  image: "https://p.turbosquid.com/ts-thumb/6z/ddoFeQ/WQTTdbab/bb_8_final08/png/1457806753/600x600/fit_q87/fc7699e18c45c9c4475dce7aabb7f7bd78e20353/bb_8_final08.jpg",
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
      <h1 className="text-4xl font-bold">Find Drones</h1>

      {/* Filters Accordion */}
      <Accordion variant="shadow" className="w-full max-w-6xl">
        <AccordionItem title="Filters">
          <p className="text-sm text-default-500">Filter options will go here.</p>
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
