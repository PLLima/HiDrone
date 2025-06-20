import { Autocomplete, AutocompleteItem, Input, Button } from "@heroui/react";

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

export function SetPath() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 w-full max-w-screen-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center">Escolha o Local de Entrega</h2>
            <Autocomplete
              className="max-w-xs"
              label="Delivery City"
              onSelectionChange={(key) => {
                if (key !== null) {
                  console.log("Cidade selecionada:", key);
                }
              }}
            >
              {cities.map((city) => (
                <AutocompleteItem key={city.key}>{city.label}</AutocompleteItem>
              ))}
            </Autocomplete>

            <Input name="pickupAddress" label="Pickup Address"></Input>
            <Input name="deliveryAddress" label="Delivery Address"></Input>

            <Button color="primary" className="w-full max-w-xs">
              Go to Payment
            </Button>
        </div>
    );
}
