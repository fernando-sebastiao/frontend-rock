import { MapPin, Calendar, ArrowRight, UserRoundPlus } from "lucide-react";

export function App() {
  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
          {/* //faltando o logo.svg do planner// */}
          <div className=" flex flex-col items-center gap-3">
            <UserRoundPlus />
            <p className="text-zinc-300 text-lg">
              Convide seus amigos e planeja a sua próxima viagem
            </p>
          </div>

          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
            <div className="flex items-center gap-2  flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Para onde você vai"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Quando?"
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
              />
            </div>
            <div className="w-px h-6 bg-zinc-800"></div>
            <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
              Continuar
              <ArrowRight className="size-5 text-lime-950" />
            </button>
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
