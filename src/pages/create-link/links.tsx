import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface Link {
  id: string;
  title: string;
  url: string;
  trip_id: string;
}

interface Trip {
  id: string;
  destination: string;
  starts_at: Date;
  ends_at: Date;
  is_confirmed: boolean;
  created_at: Date;
  links: Link[];
}

export function Links() {
  const { tripId } = useParams();
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    api
      .get(`trips/${tripId}`)
      .then((response) => {
        console.log("Response data:", response.data);
        const trip: Trip = response.data;
        if (trip && Array.isArray(trip.links)) {
          setLinks(trip.links);
        } else {
          console.log("Trip or trip.links is not defined or is not an array.");
        }
        console.log("Links from trip:", trip.links);
      })
      .catch((error) => {
        console.error("Error fetching trip links:", error);
      });
  }, [tripId]);

  return (
    <div className="space-y-8">
      <div>
        {links.length > 0 ? (
          links.map((link) => (
            <div key={link.id} className="space-y-2.5">
              <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-sm flex items-center gap-3">
                <CircleCheck className="size-5 text-lime-300" />
                <span className="text-zinc-100">{link.url}</span>
              </div>
            </div>
          ))
        ) : (
          <p>No links available</p>
        )}
      </div>
    </div>
  );
}
