import Link from "next/link";

export default function Home() {
	return (
		<div className="flex">
			<div className="flex items-center justify-center h-screen w-full">
				<Link href='/home'>Ir para home</Link>
			</div>
		</div>
	);
}
