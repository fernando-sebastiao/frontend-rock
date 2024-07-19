import { ArrowRight, AtSign, X } from "lucide-react";
import { FormEvent } from "react";

interface InviteGuestModalProps {
  CloseIsGuestModal: () => void;
  emailsToInvites: string[];
  AddNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailFromIvite: (email: string) => void;
}
//aqui no props também posso destruturar e colocar as funções que estão por baixo
export function InviteGuestModal({
  AddNewEmailToInvite,
  CloseIsGuestModal,
  emailsToInvites,
  removeEmailFromIvite,
}: InviteGuestModalProps) {
  return (
    //O background que vem depois bg-black/70
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6  bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidadados</h2>
            <button type="button" onClick={CloseIsGuestModal}>
              {" "}
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação nas
            viagens!
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvites.map((email) => {
            return (
              <div
                key={email}
                className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
              >
                <span className="text-zinc-300">{email}</span>
                <button type="button">
                  <X
                    className="size-4 text-zinc-400"
                    onClick={() => removeEmailFromIvite(email)}
                  />
                </button>
              </div>
            );
          })}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form
          onSubmit={AddNewEmailToInvite}
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <div className="px-2 flex items-center flex-1 gap-2">
            <AtSign className="text-zinc-400 size-4" />
            <input
              type="email"
              placeholder="Digite o e-mail do convidado"
              name="email"
              className="bg-transparent text-sm placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <button
            type="submit"
            className="bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400"
          >
            Convidar amigos(as)
            <ArrowRight className="size-5 text-lime-950" />
          </button>
        </form>
      </div>
    </div>
  );
}
