import { Plus } from "lucide-react";
import { useState } from "react";
import { Activities } from "./activities";
import { CreateActivityModal } from "./create-activity-modal";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { Guests } from "./guests";
import { ImportantLinks } from "./importants-links";
import { UpdateTrip } from "./create-update-trip";

export function TripDetailsPage() {
  const [isUpdateModalOpen, setUpdateModalOpen] = useState<boolean>(false);

  function OpenUpdateTripModal() {
    setUpdateModalOpen(true);
  }

  function CloseUpdateTripModal() {
    setUpdateModalOpen(false);
  }

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
        <DestinationAndDateHeader OpenUpdateTripModal={OpenUpdateTripModal} />

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
      <div>{isUpdateModalOpen && <UpdateTrip CloseUpdateTripModal={CloseUpdateTripModal} />}</div>
    </>
  );
}
