import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
  X,
  AtSign,
  User,
} from "lucide-react";
import { FormEvent, useState } from "react";

export function App() {
  const [isGuestsInputOpen, setsGuestsInputOpen] = useState<boolean>(false);
  //para chamar outro modal como tela
  const [isGuestsModalOpen, setisGuestsModalOpen] = useState<boolean>(false);
  const [emailsToInvites, setEmailsToInvites] = useState<string[]>([
    "fernando@sebastiao.com.ao",
    "divaldo@helder.com.ao",
  ]);

  //para chamar o modal de inputs
  function OpenIsGuestInput() {
    setsGuestsInputOpen(true);
  }
  function CloseIsGuestInput() {
    setsGuestsInputOpen(false);
  }

  function OpenIsGuestModal() {
    setisGuestsModalOpen(true);
  }
  function CloseIsGuestModal() {
    setisGuestsModalOpen(false);
  }
  function AddEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();
    if (!email) {
      return;
    }
    if (emailsToInvites.includes(email)) {
      return;
    }
    setEmailsToInvites([...emailsToInvites, email]);
    event.currentTarget.reset();
  }
  function removeEmailFromIvite(emailToremove: string) {
    const newEmailList = emailsToInvites.filter(
      (email) => email !== emailToremove
    );
    setEmailsToInvites(newEmailList);
  }

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
          {/* //faltando o logo.svg do planner// */}
          <div className=" flex flex-col items-center gap-3">
            <UserRoundPlus />
            <p className="text-zinc-300 text-lg">
              Convide seus amigos e planeja a sua próxima viagem
            </p>
          </div>
          <div className="space-y-4">
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
              <div className="flex items-center gap-2  flex-1">
                <MapPin className="size-5 text-zinc-400" />
                <input
                  disabled={isGuestsInputOpen}
                  type="text"
                  placeholder="Para onde você vai"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-5 text-zinc-400" />
                <input
                  disabled={isGuestsInputOpen}
                  type="text"
                  placeholder="Quando?"
                  className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
                />
              </div>

              <div className="w-px h-6 bg-zinc-800" />
              {isGuestsInputOpen ? (
                <button
                  className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
                  onClick={CloseIsGuestInput}
                >
                  alterar local/data
                  <Settings2 className="size-5 text-zinc-200" />
                </button>
              ) : (
                <button
                  onClick={OpenIsGuestInput}
                  className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
                >
                  Continuar
                  <ArrowRight className="size-5 text-lime-950" />
                </button>
              )}
            </div>
            {/* //aqui pode se colocar o ponto de interrogação ? também  */}
            {
              isGuestsInputOpen && (
                <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
                  <button
                    type="button"
                    onClick={OpenIsGuestModal}
                    className="flex items-center gap-2  flex-1"
                  >
                    <UserRoundPlus className="size-5 text-zinc-400" />
                    <span className="text-zinc-400 text-lg text-left">
                      Quem estará na viagem?
                    </span>
                  </button>

                  <div className="w-px h-6 bg-zinc-800"></div>
                  <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                    Confirmar viagem
                    <ArrowRight className="size-5 text-lime-950" />
                  </button>
                </div>
              )
              // : (
              //   "fechado"
              // aqui pode se usar isto ou null )
            }
          </div>
          <p className="text-sm text-zinc-500">
            Ao planeja a sua viagem pela plann.er você automaticamente concorda{" "}
            <br />
            com nossos{" "}
            <a className="text-zinc-300 underline" href="#">
              termos de uso
            </a>{" "}
            e{" "}
            <a className="text-zinc-300 underline" href="#">
              politica de privacidade
            </a>
          </p>
        </div>
        {isGuestsModalOpen && (
          // bg-black/60 => isto é uma opacidade
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
            <div className="w-[640px] rounded-xl py-5 px-6  bg-zinc-900 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">
                    Selecionar convidadados
                  </h2>
                  <button type="button" onClick={CloseIsGuestModal}>
                    {" "}
                    <X className="size-5 text-zinc-400" />
                  </button>
                </div>
                <p className="text-sm text-zinc-400">
                  Os convidados irão receber e-mails para confirmar a
                  participação nas viagens!
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
                onSubmit={AddEmailToInvite}
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
                  className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
                >
                  Convidar amigos(as)
                  <ArrowRight className="size-5 text-lime-950" />
                </button>
              </form>
            </div>
          </div>
        )}
        {/* //Confirmar criação de viagem */}
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
          <div className="w-[620px] rounded-xl py-5 px-6  bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Confirmar criação de viagem
                </h2>
                <button type="button" onClick={CloseIsGuestModal}>
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

            <form onSubmit={AddEmailToInvite} className="space-y-3">
              <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <User className="text-zinc-400 size-4" />
                <input
                  type="email"
                  placeholder="Seu nome completo"
                  name="name"
                  className="bg-transparent text-sm placeholder-zinc-400 outline-none flex-1"
                />
              </div>
              <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <User className="text-zinc-400 size-4" />
                <input
                  type="email"
                  placeholder="Seu e-mail pessoal"
                  name="email"
                  className="bg-transparent text-sm placeholder-zinc-400 outline-none flex-1"
                />
              </div>
              <button
                type="submit"
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 w-full justify-center"
              >
                Convidar amigos(as)
                <ArrowRight className="size-5 text-lime-950" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
