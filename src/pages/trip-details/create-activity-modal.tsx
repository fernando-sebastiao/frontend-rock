import { X, Tag, Calendar, ArrowRight } from "lucide-react";

interface CreateActivityModalProps {
  closeCreatedActivityModal: () => void;
}
export function CreateActivityModal({
  closeCreatedActivityModal,
}: CreateActivityModalProps) {
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
  );
}
