import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { ExternalLink, Link } from "lucide-react"

export function ProjectCard({ invert }: { invert?: boolean }) {
	return (
		<div className={`flex gap-10 items-center ${invert && "flex-row-reverse"}`}>
			<div className="w-[450px] bg-zinc-500 rounded overflow-hidden">
				<AspectRatio ratio={16 / 9}>
					<img src="" alt="" className="object-cover" />
				</AspectRatio>
			</div>
			<div className={`w-2/5 space-y-5 ${invert && "text-right"}`}>
				<h2 className="font-semibold text-2xl">Sustainable Urban Gardens Initiative</h2>
				<p className="text-lg">
					Title: "Sustainable Urban Gardens Initiative" Description: Join us in
					transforming urban spaces into thriving green havens with our Sustainable Urban
					Gardens Initiative! This community-driven project aims to create accessible and
					cultivate a healthier, greener future together!
				</p>
				<div className="space-x-3">
					<Button variant="link">
						Live Demo <ExternalLink size={16} />
					</Button>
					<Button variant="link">
						Source Code <Link size={16} />
					</Button>
				</div>
			</div>
		</div>
	)
}
