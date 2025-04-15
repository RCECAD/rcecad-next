import { FileWarning } from "lucide-react";

export default function Home() {
	return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="bg-slate-200 rounded-lg p-6 h-fit w-fit">
        FLOOOOOOOOOOOOOOWS
        <FileWarning />
        <p className="font-extrabold text-2xl">Nenhum projeto encontrado</p>
        <p className="font-medium text-lg text-slate-500">
          Crie um novo escolhendo uma das opções abaixo.
        </p>
      </div>
    </div>
	);
}
