import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";
import { useState } from "react";
import { CreateLinkModal } from "../create-link";

export function ImportantLinks() {
  const [isOpenCreateLinkModal, setIsOpenCreateLinkModal] =
    useState<boolean>(false);

  function OpenCreateLinkModal() {
    setIsOpenCreateLinkModal(true);
  }
  function CloseCreateLinkModal() {
    setIsOpenCreateLinkModal(false);
  }
  return (
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
      <Button
        onClick={OpenCreateLinkModal}
        variant="secundary"
        size="full"
        type="submit"
      >
        <Plus className="size-5 text-zinc-200" />
        Cadastrar novo link
      </Button>
      {isOpenCreateLinkModal && 
      <CreateLinkModal CloseCreateLinkModal={CloseCreateLinkModal}/>}
    </div>
  );
}
