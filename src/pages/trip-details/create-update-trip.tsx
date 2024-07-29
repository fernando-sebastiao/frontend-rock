import { MapPin, Calendar, ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface UpdateTripProps {
  CloseUpdateTripModal: () => void;
}

export function UpdateTrip({ CloseUpdateTripModal }: UpdateTripProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);
  const [enventStartsAndDates, setEnventStartsAndDates] = useState<
    DateRange | undefined
  >();
  const [destination, setDestination] = useState<string>("");

  function openDatePicker() {
    setIsDatePickerOpen(true);
  }

  function closeDatePicker() {
    setIsDatePickerOpen(false);
  }

  const displayedDate =
    enventStartsAndDates && enventStartsAndDates.from && enventStartsAndDates.to
      ? format(enventStartsAndDates.from, "d' de 'LLL")
          .concat(" até ")
          .concat(format(enventStartsAndDates.to, "d' de 'LLL"))
      : "Quando";

  const tripId = useParams();
  console.log(tripId);
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await api.put(`/trips/${tripId}`, {
        destination,
        startDate: enventStartsAndDates?.from,
        endDate: enventStartsAndDates?.to,
      });
      CloseUpdateTripModal();
    } catch (error) {
      console.error("Erro ao atualizar a viagem:", error);
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-2 bg-zinc-800 rounded-lg py-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Atualizar trip</h2>
            <button type="button" onClick={CloseUpdateTripModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
              <div className="flex items-center justify-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Para onde você vai"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <button
                type="button"
                className="flex items-center gap-2 text-left w-[240px]"
                onClick={openDatePicker}
              >
                <Calendar className="size-5 text-zinc-400" />
                <span className="text-zinc-400 w-40 flex-1">
                  {displayedDate}
                </span>
              </button>

              <Button type="submit" variant="primary">
                Atualizar
                <ArrowRight className="size-5 text-lime-950" />
              </Button>
            </div>
          </form>

          {isDatePickerOpen && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg z-10">
              <DayPicker
                selected={enventStartsAndDates}
                onSelect={setEnventStartsAndDates}
                mode="range"
              />
              <button
                type="button"
                onClick={closeDatePicker}
                className="text-zinc-400 mt-2"
              >
                Fechar
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
