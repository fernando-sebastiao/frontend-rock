import { X, Tag, Calendar, ArrowRight } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface CreateActivityModalProps {
  closeCreatedActivityModal: () => void;
}
export function CreateActivityModal({
  closeCreatedActivityModal,
}: CreateActivityModalProps) {
  const { tripId } = useParams();

  async function CreateActivityModal(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const title = data.get("title")?.toString();
    const accours_at = data.get("accours_at")?.toString();

    await api.post(`/trips/${tripId}/activities`, {
      title,
      accours_at,
    });

    closeCreatedActivityModal();
    window.document.location.reload();

    console.log(title, accours_at);
  }

  return (
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

        <form onSubmit={CreateActivityModal} className="space-y-3">
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
                name="accours_at"
                className="bg-transparent text-sm placeholder-zinc-400 outline-none flex-1"
              />
            </div>
          </div>
          <Button variant="primary" size="full" type="submit">
            Salvar atividade
            <ArrowRight className="size-5 text-lime-950" />
          </Button>
        </form>
      </div>
    </div>
  );
}
