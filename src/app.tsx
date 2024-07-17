import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
} from "lucide-react";
import { useState } from "react";

export function App() {
  const [isGuestsInputOpen, setsGuestsInputOpen] = useState<boolean>(false);

  function OpenIsGuestInput() {
    setsGuestsInputOpen(true);
  }

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
          <div className="space-y-4">
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

              <div className="w-px h-6 bg-zinc-800" />
              {isGuestsInputOpen ? (
                <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
                  alterar local/data
                  <Settings2 className="size-5 text-zinc-200" />
                </button>
              ) : (
                <button
                  onClick={OpenIsGuestInput}
                  className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
                >
                  Continuar
                  <ArrowRight className="size-5 text-lime-950" />
                </button>
              )}
            </div>
            {/* //aqui pode se colocar o ponto de interrogação ? também  */}
            {
              isGuestsInputOpen && (
                <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
                  <div className="flex items-center gap-2  flex-1">
                    <UserRoundPlus className="size-5 text-zinc-400" />
                    <input
                      type="text"
                      placeholder="Quem estará na viagem?"
                      className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                    />
                  </div>

                  <div className="w-px h-6 bg-zinc-800"></div>
                  <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                    Confirmar viagem
                    <ArrowRight className="size-5 text-lime-950" />
                  </button>
                </div>
              )
              // : (
              //   "fechado"
              // aqui pode se usar isto ou null )
            }
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
