import { UserRoundPlus, ArrowRight } from "lucide-react";

interface InviteGuestStepProps {
  OpenIsGuestModal: () => void;
  emailsToInvite: string[];
  openConfirmTripModal: () => void;
}

export function InviteGuestStep({
  OpenIsGuestModal,
  emailsToInvite,
  openConfirmTripModal,
}: InviteGuestStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
      <button
        type="button"
        onClick={OpenIsGuestModal}
        className="flex items-center gap-2  flex-1"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100 text-lg text-left">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-zinc-400 text-lg text-left">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <div className="w-px h-6 bg-zinc-800"></div>
      <button
        onClick={openConfirmTripModal}
        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
      >
        Confirmar viagem
        <ArrowRight className="size-5 text-lime-950" />
      </button>
    </div>
  );
}
