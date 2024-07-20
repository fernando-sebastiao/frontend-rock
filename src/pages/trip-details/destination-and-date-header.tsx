import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { format } from "date-fns";

interface Trip {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean;
}

export function DestinationAndDateHeader() {
  const { tripId } = useParams();
  const [trip, setTrip] = useState<Trip | undefined>();
  useEffect(() => {
    api.get(`/trips/${tripId}`).then((response) => setTrip(response.data.trip));
  }, [tripId]);

  const displayedDate =
    trip && trip.starts_at && trip.ends_at
      ? format(trip?.starts_at, "d' de 'LLL")
          .concat(" até ")
          .concat(format(trip.ends_at, "d' de 'LLL"))
      : null;

  return (
    <div className="px-16 h-16 rounded-l bg-zinc-900 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className=" text-zinc-100">{trip?.destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className=" text-zinc-100">{displayedDate}</span>
        </div>
        <div className="w-px h-6 bg-zinc-800" />
        <Button variant="secundary" size="default">
          Alterar local/data
          <Settings2 className="size-5 text-zinc-200" />
        </Button>
      </div>
    </div>
  );
}
