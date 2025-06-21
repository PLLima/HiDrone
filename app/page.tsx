import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-10 py-8 md:py-16 px-4 md:px-20">
      {/* Texto à esquerda */}
      <div className="flex flex-col items-start max-w-xl text-left">
        <h1 className={title({ color: "violet" }) + " text-5xl md:text-6xl font-bold"}>
          Rent drones for package delivery
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Flexible drone rental for your delivery needs
        </p>

        <div className="mt-6 flex gap-3">
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </div>

      {/* Imagem à direita */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/drone_home.png" // Altere esse caminho para o real
          alt="Drone delivery"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
}
