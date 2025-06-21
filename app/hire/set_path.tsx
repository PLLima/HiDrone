import { Autocomplete, AutocompleteItem, Input, Button } from "@heroui/react";
import { useState } from "react";

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

export function SetPath({
  goToPayment,
  selectedDroneId,
  setDistanceCost,
}: {
  goToPayment: () => void;
  selectedDroneId: number | null;
  setDistanceCost: (cost: number) => void;
}) {


  const [pickup, setPickup] = useState("");
  const [delivery, setDelivery] = useState("");
  const [cityKey, setCityKey] = useState<string | null>(null);
  const [cityInputValue, setCityInputValue] = useState("");


  const handleGoToPayment = () => {
    if (selectedDroneId === null) {
      alert("Por favor, selecione um drone antes de continuar.");
      return;
    }

    if (pickup.trim() === "" || delivery.trim() === "") {
      alert("Por favor, preencha todos os campos de endereço.");
      return;
    }

    //Gera valor de distância aleatório entre 20 e 100
    const distanceCost = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
    setDistanceCost(distanceCost);
    goToPayment();
  };

  const filteredCities = cities.filter((city =>
    city.label.toLowerCase().includes(cityInputValue.toLowerCase())
  ));



  return (
    <div className="flex flex-col items-center justify-center gap-6 w-full max-w-screen-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center">Choose Delivery Location</h2>


      {/* <Autocomplete
        className="max-w-xs"
        label="Delivery City"
        inputValue={cityInputValue}
        selectedKey={cityKey ?? undefined}
        onInputChange={setCityInputValue}
        onSelectionChange={(key) => {
          setCityKey(key as string);
          const selectedCity = cities.find(city => city.key === key);
          if (selectedCity) {
            setCityInputValue(selectedCity.label);
          } else {
            setCityInputValue(""); // Clear input if selected key is not found (shouldn't happen with allowsCustomValue=false)
          }
        }}
        allowsCustomValue={false}
        allowsEmptyCollection={false}
      >

        {cities.map((city) => (
          <AutocompleteItem key={city.key}> {city.label} </AutocompleteItem>
        ))}

      </Autocomplete> */}

      <Input name="pickupAddress" label="Pickup Address" value={pickup} onValueChange={setPickup}></Input>
      <Input name="deliveryAddress" label="Delivery Address" value={delivery} onValueChange={setDelivery}></Input>

      <Button color="primary" className="w-full max-w-xs" onPress={handleGoToPayment}>
        Go to Payment
      </Button>
    </div>
  );
}
