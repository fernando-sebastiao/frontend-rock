import { Plus } from "lucide-react";
import { Button } from "../../components/button";
import { useState } from "react";
import { CreateLinkModal } from "../create-link";
import { Links } from "../create-link/links";

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
          <Links />
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
      {isOpenCreateLinkModal && (
        <CreateLinkModal CloseCreateLinkModal={CloseCreateLinkModal} />
      )}
    </div>
  );
}
