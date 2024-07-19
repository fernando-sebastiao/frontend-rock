import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Jessica White
            </span>
            <span className="block text-sm text-zinc-400 truncate">
              jessica.white44.yahoo.com
            </span>
          </div>
          <CircleDashed className="size-5 text-zinc-400" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Dr, Rita Pachoca
            </span>
            <span className="block text-sm text-zinc-400 truncate">
              lecy.styleomai@gmail.com
            </span>
          </div>
          <CircleDashed className="size-5 text-zinc-400" />
        </div>
      </div>
      <Button variant="secundary" size="full">
        <UserCog className="size-5 text-zinc-200" />
        Cadastrar novo link
      </Button>
    </div>
  );
}
