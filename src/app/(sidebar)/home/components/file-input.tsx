import { FileWarning } from "lucide-react";

export const FileInput = () => {
	return (
		<div className="bg-slate-200 rounded-lg p-6 h-fit w-full max-w-2xl flex flex-col items-start justify-center gap-3 shadow-2xl shadow-sky-500/30">
			<FileWarning className="text-sky-500" size={48} />
			<div>
				<p className="font-extrabold text-2xl text-slate-700">
					Nenhum projeto encontrado
				</p>
				<p className="font-medium text-lg text-slate-500">
					Crie um novo escolhendo uma das opções abaixo.
				</p>
			</div>
			<div className="border-slate-300 w-full py-12 px-6 border-2 border-dashed rounded-lg flex flex-col items-center justify-center gap-3">
				<p className="text-slate-400">
					<strong>Arraste</strong> e <strong>solte</strong> seu arquivo aqui
				</p>
				<strong className="text-slate-400">ou</strong>
				<label
					htmlFor="file-upload"
					className="text-slate-800 bg-slate-300 rounded  text-lg font-medium px-8 py-2 mt-2 cursor-pointer transition-all ease-in-out hover:bg-slate-400"
				>
					Escolha um arquivo
				</label>
				<input id="file-upload" type="file" className="hidden" />
			</div>
		</div>
	);
};
