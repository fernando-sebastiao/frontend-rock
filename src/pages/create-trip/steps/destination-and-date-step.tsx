import { MapPin, Calendar, Settings2, ArrowRight, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  CloseIsGuestInput: () => void;
  OpenIsGuestInput: () => void;
}

export function DestinationAndDateStep(props: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);
  const [enventStartsAndDates, setEnventStartsAndDates] = useState<
    DateRange | undefined
  >();

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
      : null;
  return (
    <>
      <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
        <div className="flex items-center gap-2  flex-1">
          <MapPin className="size-5 text-zinc-400" />
          <input
            disabled={props.isGuestsInputOpen}
            type="text"
            placeholder="Para onde você vai"
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
          />
        </div>

        <button
          onClick={openDatePicker}
          disabled={props.isGuestsInputOpen}
          className="flex items-center gap-2 text-left w-[240px]"
        >
          <Calendar className="size-5 text-zinc-400" />
          <span className=" text-zinc-400 w-40 flex-1">
            {displayedDate || "Quando"}
          </span>
        </button>

        {isDatePickerOpen && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center">
            <div className="rounded-xl py-5 px-6  bg-zinc-900 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Selecione a data</h2>
                  <button type="button" onClick={closeDatePicker}>
                    {" "}
                    <X className="size-5 text-zinc-400" />
                  </button>
                </div>
              </div>
              <DayPicker
                selected={enventStartsAndDates}
                onSelect={setEnventStartsAndDates}
                mode="range"
              />
            </div>
          </div>
        )}

        <div className="w-px h-6 bg-zinc-800" />
        {props.isGuestsInputOpen ? (
          <Button
            variant="secundary"
            size="default"
            onClick={props.CloseIsGuestInput}
          >
            alterar local/data
            <Settings2 className="size-5 text-zinc-200" />
          </Button>
        ) : (
          <Button onClick={props.OpenIsGuestInput} variant="primary">
            Continuar
            <ArrowRight className="size-5 text-lime-950" />
          </Button>
        )}
      </div>
    </>
  );
}
