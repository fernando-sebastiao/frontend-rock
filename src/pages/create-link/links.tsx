import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";

interface LinksProps {
  //   links: [
  //     {
  id: string;
  title: string;
  url: string;
  trip_id: string;
  //     }
  //   ];
}

export function Links() {
  const { tripId } = useParams();
  const [links, setLinks] = useState<LinksProps[]>([]);

  useEffect(() => {
    api
      .get(`trips/${tripId}/links`)
      .then((response) => setLinks(response.data.activities));
  }, [tripId]);
  return (
    <div className="space-y-8">
      <div>
        {links.map((link) => {
          return (
            <div key={link.id} className="space-y-2.5">
              <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-sm flex items-center gap-3">
                <CircleCheck className="size-5 text-lime-300" />
                <span className="text-zinc-100">{link.url}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
