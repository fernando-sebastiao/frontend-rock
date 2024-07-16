import { MapPin, Calendar } from "lucide-react";

export function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeja a sua próxima viagem
          </p>
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center">
            <input
              type="text"
              placeholder="Para onde você vai"
              className="bg-transparent text-lg placeholder-zinc-400"
            />
            <input
              type="text"
              placeholder="Quando?"
              className="bg-transparent text-lg placeholder-zinc-400"
            />
            <button>Continuar</button>
          </div>
          <p className="text-sm text-zinc-500">
            Ao planeja a sua viagem pela plann.er você automaticamente concorda{" "}
            <br />
            com nossos{" "}
            <a className="text-zinc-300 underline" href="#">
              termos de uso
            </a>{" "}
            e{" "}
            <a className="text-zinc-300 underline" href="#">
              politica de privacidade
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
