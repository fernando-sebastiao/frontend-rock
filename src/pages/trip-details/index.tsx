import { Calendar, MapPin, Plus, Settings2 } from "lucide-react";
import { useState } from "react";
import { Activities } from "./activities";
import { CreateActivityModal } from "./create-activity-modal";
import { Guests } from "./guests";
import { ImportantLinks } from "./importants-links";

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
            <Activities />
          </div>

          <div className="w-80 space-y-6">
            <ImportantLinks />

            <div className="w-full h-px bg-zinc-800"></div>
            <Guests />
          </div>
        </main>
        {isCreateActivityModalOpen && (
          <CreateActivityModal
            closeCreatedActivityModal={closeCreatedActivityModal}
          />
        )}
      </div>
    </>
  );
}
