import { X, Tag, LinkIcon, ArrowRightIcon } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface CreateLinkModalProps {
  CloseCreateLinkModal: () => void;
}

export function CreateLinkModal({
  CloseCreateLinkModal,
}: CreateLinkModalProps) {
  const { tripId } = useParams();

  async function CreateLinkModal(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const title = data.get("title")?.toString();
    const url = data.get("url")?.toString();

    await api.post(`/trips/${tripId}/links`, {
      title,
      url,
      tripId,
    });

    console.log(title, url, tripId);
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="w-[520px] rounded-xl py-5 px-6  bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Criar Link</h2>
            <button type="button" onClick={CloseCreateLinkModal}>
              {" "}
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">Cria aqui o seu link!</p>
        </div>

        <form onSubmit={CreateLinkModal} className="space-y-3">
          <div className="h-11 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-4" />
            <input
              type="text"
              placeholder="Qual é o titulo?"
              name="title"
              className="bg-transparent text-sm placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="flex items-center gap-1">
            <div className="h-11 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center flex-1 gap-2">
              <LinkIcon className="text-zinc-400 size-4" />
              <input
                type="url"
                placeholder="www.examplefernando.com"
                name="url"
                className="bg-transparent text-sm placeholder-zinc-400 outline-none flex-1"
              />
            </div>
          </div>
          <Button variant="primary" size="full" type="submit">
            Criar link
            <ArrowRightIcon className="size-5 text-lime-950" />
          </Button>
        </form>
      </div>
    </div>
  );
}
