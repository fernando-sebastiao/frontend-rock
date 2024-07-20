import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestModal } from "./invite-guests-modal";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestStep } from "./steps/invite-guests-step";
import { DateRange } from "react-day-picker";
import { api } from "../../lib/axios";

export function CreateTripPage() {
  //Usando o navigation do react-houter-dom
  const navigate = useNavigate();

  const [isGuestsInputOpen, setsGuestsInputOpen] = useState<boolean>(false);
  //para chamar outro modal como tela
  const [isGuestsModalOpen, setisGuestsModalOpen] = useState<boolean>(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] =
    useState<boolean>(false);

  const [destination, setDestination] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [enventStartsAndDates, setEnventStartsAndDates] = useState<
    DateRange | undefined
  >();

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
  function OpenIsConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function CloseIsConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }
  function CloseIsGuestModal() {
    setisGuestsModalOpen(false);
  }
  function AddNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
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

  //Função para criar Trip
  async function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(destination);
    console.log(enventStartsAndDates);
    console.log(ownerEmail);
    console.log(ownerName);
    if (!destination) {
      return;
    }
    if (!enventStartsAndDates?.from || !enventStartsAndDates?.to) {
      return;
    }
    if (emailsToInvites.length === 0) {
      return;
    }
    if (!ownerEmail || !ownerName) {
      return;
    }
    const response = await api.post("/trips", {
      destination,
      starts_at: enventStartsAndDates?.from,
      ends_at: enventStartsAndDates?.to,
      owner_name: ownerName,
      owner_email: ownerEmail,
      emails_to_invite: emailsToInvites,
    });
    console.log(response.data); // Verificar a resposta da API
    const { tripId } = response.data;
    console.log(`Navigating to /trips/${tripId}`); // Verificar o tripId antes de navegar
    navigate(`/trips/${tripId}`);
  }
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-pattern">
        <div className="max-w-3xl w-full px-6 text-center space-y-10">
          <div className=" flex flex-col items-center gap-3">
            <img src="/logo.svg" alt="Plann.er" />
            <p className="text-zinc-300 text-lg">
              Convide seus amigos e planeja a sua próxima viagem
            </p>
          </div>
          <div className="space-y-4">
            <DestinationAndDateStep
              CloseIsGuestInput={CloseIsGuestInput}
              OpenIsGuestInput={OpenIsGuestInput}
              isGuestsInputOpen={isGuestsInputOpen}
              setDestination={setDestination}
              setEnventStartsAndDates={setEnventStartsAndDates}
              enventStartsAndDates={enventStartsAndDates}
            />
            {isGuestsInputOpen && (
              <InviteGuestStep
                OpenIsGuestModal={OpenIsGuestModal}
                emailsToInvite={emailsToInvites}
                openConfirmTripModal={OpenIsConfirmTripModal}
              />
            )}
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
          <InviteGuestModal
            AddNewEmailToInvite={AddNewEmailToInvite}
            CloseIsGuestModal={CloseIsGuestModal}
            emailsToInvites={emailsToInvites}
            removeEmailFromIvite={removeEmailFromIvite}
          />
        )}

        {/* //Confirmar criação de viagem */}
        {isConfirmTripModalOpen && (
          <ConfirmTripModal
            CloseIsConfirmTripModal={CloseIsConfirmTripModal}
            createTrip={createTrip}
            setOwnerName={setOwnerName}
            setOwnerEmail={setOwnerEmail}
          />
        )}
      </div>
    </>
  );
}
