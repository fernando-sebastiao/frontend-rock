import { X, User, ArrowRight } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
  CloseIsConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal(props: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
      <div className="w-[520px] rounded-xl py-5 px-6  bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação de viagem
            </h2>
            <button type="button" onClick={props.CloseIsConfirmTripModal}>
              {" "}
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Para confirmar a criação da viagem para{" "}
            <span className="text-zinc-100 font-semibold">
              Floreniópoles, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="text-zinc-100 font-semibold">
              16 de agosto de 2024
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={props.createTrip} className="space-y-3">
          <div className="h-11 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-4" />
            <input
              type="text"
              placeholder="Seu nome completo"
              name="name"
              className="bg-transparent text-sm placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <div className="h-11 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-4" />
            <input
              type="email"
              placeholder="Seu e-mail pessoal"
              name="email"
              className="bg-transparent text-sm placeholder-zinc-400 outline-none flex-1"
            />
          </div>
          <Button type="submit" variant="primary" size="full">
            Confirmar criação da viagem
            <ArrowRight className="size-5 text-lime-950" />
          </Button>
        </form>
      </div>
    </div>
  );
}
