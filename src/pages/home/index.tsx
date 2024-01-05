import { Container } from "@/components/Container"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import { ProjectCard } from "./projectcard"

export function Home() {
	return (
		<>
			<header className="fixed w-full">
				<Container className="p-3 flex items-center justify-between lg:p-5">
					<h1 className="text-xl font-bold">Greek Projects</h1>
					<ThemeToggle />
				</Container>
			</header>
			<main>
				<Container className="text-center p-5 h-screen flex flex-col items-center justify-center gap-3 max-w-sm md:flex-row-reverse md:text-left md:max-w-none md:gap-5 md:h-[80vh] lg:gap-8 xl:gap-28">
					<img src="/icon.png" alt="Atlas" className="md:max-w-xs" />
					<div className="space-y-3 md:max-w-xs lg:max-w-md xl:max-w-lg">
						<h2 className="text-3xl p-1 font-black lg:text-4xl xl:text-5xl">
							Welcome to Greek Projects!
						</h2>
						<p className="px-3 md:p-0">
							This is a portifolio for all the greek projects that I have created. You
							can see the source code and the live demo for each project!
						</p>
						<div className="space-x-3 pt-1">
							<Link to="/get-started">
								<Button className="hover:scale-105 transition-transform duration-100 ease-in-out">
									Let's get started!
								</Button>
							</Link>
							<Link to="https://github.com/WillianIgorDeveloper" target="_blank">
								<Button variant="outline" className="gap-2">
									My Github <ArrowUpRight />
								</Button>
							</Link>
						</div>
					</div>
				</Container>

				<Container className="space-y-52 p-5">
					<ProjectCard />
					<ProjectCard invert />
					<ProjectCard />
					<ProjectCard invert />
					<ProjectCard />
				</Container>
			</main>
		</>
	)
}
