import { MapPin, Calendar, ArrowRight, X } from "lucide-react";

// import { DateRange} from "react-day-picker";
import "react-day-picker/dist/style.css";
import { Button } from "../../components/button";

// interface DestinationAndDateStepProps {
//   isGuestsInputOpen: boolean;
//   CloseIsGuestInput: () => void;
//   OpenIsGuestInput: () => void;
//   setDestination: (destination: string) => void;
//   enventStartsAndDates: DateRange | undefined;
//   setEnventStartsAndDates: (date: DateRange | undefined) => void;
// }

// {
//     CloseIsGuestInput,
//     OpenIsGuestInput,
//     enventStartsAndDates,
//     isGuestsInputOpen,
//     setDestination,
//     setEnventStartsAndDates,
//   }: DestinationAndDateStepProps

interface UpdateTripProps {
  CloseUpdateTripModal: () => void;
}

export function UpdateTrip({ CloseUpdateTripModal }: UpdateTripProps) {
  //   const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);

  //   function openDatePicker() {
  //     setIsDatePickerOpen(true);
  //   }
  //   function closeDatePicker() {
  //     setIsDatePickerOpen(false);
  //   }
  return (
    <>
      <div className="fixed inset-0 bg-black/90 flex items-center justify-center">
        <div className="max-w-3xl w-full px-6 text-center space-y-2 bg-zinc-800 rounded-lg py-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Atualizar trip</h2>
            <button type="button" onClick={CloseUpdateTripModal}>
              {" "}
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <form>
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3">
              <div className="flex items-center justify-center gap-2  flex-1">
                <MapPin className="size-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Para onde você vai"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <button className="flex items-center gap-2 text-left w-[240px]">
                <Calendar className="size-5 text-zinc-400" />
                <span className=" text-zinc-400 w-40 flex-1">Quando</span>
              </button>

              <Button
                type="submit"
                onClick={CloseUpdateTripModal}
                variant="primary"
              >
                Actualizar
                <ArrowRight className="size-5 text-lime-950" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
