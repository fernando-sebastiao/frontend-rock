import {
  ArrowRight,
  Calendar,
  CircleCheck,
  CircleDashed,
  Link2,
  MapPin,
  Plus,
  Settings2,
  Tag,
  UserCog,
  X,
} from "lucide-react";
import { useState } from "react";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState<boolean>(false);
  function openCreatedActivityModal() {
    setIsCreateActivityModalOpen(true);
  }
  function closeCreatedActivityModal() {
    setIsCreateActivityModalOpen(false);
  }
  return (
    <>
      <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
        <div className="px-16 h-16 rounded-l bg-zinc-900 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="size-5 text-zinc-400" />
            <span className=" text-zinc-100">Kwanza-Norte, Angola</span>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <span className=" text-zinc-100">17 a 23 de Agosto</span>
            </div>
            <div className="w-px h-6 bg-zinc-800" />
            <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700 hover:border-zinc-200">
              alterar local/data
              <Settings2 className="size-5 text-zinc-200" />
            </button>
          </div>
        </div>

        <main className="flex gap-16 px-4">
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold">Atividades</h2>
              <button
                onClick={openCreatedActivityModal}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
              >
                <Plus className="size-5 text-lime-950" />
                Cadastrar atividade
              </button>
            </div>
            <div className="space-y-8">
              <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                  <span className="text-xl text-zinc-300 font-semibold">
                    Dia 17
                  </span>
                  <span className="text-xs text-zinc-500">Sabado</span>
                </div>
                <p className="text-zinc-500 text-sm">
                  Nenhuma atividade cadastrada nesta data
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                  <span className="text-xl text-zinc-300 font-semibold">
                    Dia 19
                  </span>
                  <span className="text-xs text-zinc-500">Domingo</span>
                </div>
                <div className="space-y-2.5">
                  <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-sm flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">Academia em grupo</span>
                    <span className="text-zinc-100 text-sm ml-auto">
                      08:00h
                    </span>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-sm flex items-center gap-3">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">Academia em grupo</span>
                    <span className="text-zinc-100 text-sm ml-auto">
                      08:00h
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-80 space-y-6">
            <div className="space-y-6">
              <h2 className="font-semibold text-xl">Links importantes</h2>
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <span className="block font-medium text-zinc-100">
                      Reserva do AirBin
                    </span>
                    <a
                      href="#"
                      className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                    >
                      https://www.airbnb.com.br/rooms/1234567890fernando
                    </a>
                  </div>
                  <Link2 className="size-5 text-zinc-400" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <span className="block font-medium text-zinc-100">
                      Reserva do AirBin
                    </span>
                    <a
                      href="#"
                      className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                    >
                      https://www.airbnb.com.br/rooms/1234567890fernando
                    </a>
                  </div>
                  <Link2 className="size-5 text-zinc-400" />
                </div>
              </div>
              <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex justify-center items-center gap-2 hover:bg-zinc-700 hover:border-zinc-200 w-full">
                <Plus className="size-5 text-zinc-200" />
                Cadastrar novo link
              </button>
            </div>

            <div className="w-full h-px bg-zinc-800"></div>

            <div className="space-y-6">
              <h2 className="font-semibold text-xl">Convidados</h2>
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <span className="block font-medium text-zinc-100">
                      Jessica White
                    </span>
                    <span className="block text-sm text-zinc-400 truncate">
                      jessica.white44.yahoo.com
                    </span>
                  </div>
                  <CircleDashed className="size-5 text-zinc-400" />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <span className="block font-medium text-zinc-100">
                      Dr, Rita Pachoca
                    </span>
                    <span className="block text-sm text-zinc-400 truncate">
                      lecy.styleomai@gmail.com
                    </span>
                  </div>
                  <CircleDashed className="size-5 text-zinc-400" />
                </div>
              </div>
              <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex justify-center items-center gap-2 hover:bg-zinc-700 hover:border-zinc-200 w-full">
                <UserCog className="size-5 text-zinc-200" />
                Cadastrar novo link
              </button>
            </div>
          </div>
        </main>
        {isCreateActivityModalOpen && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
            <div className="w-[520px] rounded-xl py-5 px-6  bg-zinc-900 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
                  <button type="button" onClick={closeCreatedActivityModal}>
                    {" "}
                    <X className="size-5 text-zinc-400" />
                  </button>
                </div>
                <p className="text-sm text-zinc-400">
                  Todos os convidados podem visualizar as atividades
                </p>
              </div>

              <form className="space-y-3">
                <div className="h-11 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                  <Tag className="text-zinc-400 size-4" />
                  <input
                    type="text"
                    placeholder="Qual a atividade"
                    name="title"
                    className="bg-transparent text-sm placeholder-zinc-400 outline-none flex-1"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <div className="h-11 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center flex-1 gap-2">
                    <Calendar className="text-zinc-400 size-4" />
                    <input
                      type="datetime-local"
                      placeholder="Seu e-mail pessoal"
                      name="Data e horário da atividade"
                      className="bg-transparent text-sm placeholder-zinc-400 outline-none flex-1"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 w-full justify-center"
                >
                  Salvar atividade
                  <ArrowRight className="size-5 text-lime-950" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
