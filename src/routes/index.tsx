import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { type ReactNode, useState } from "react";
import { Signature } from "@/components/signature";

export const Route = createFileRoute("/")({ component: App });

function CompanyLink({
	name,
	githubUrl,
	logo,
}: {
	name: string;
	githubUrl: string;
	logo: ReactNode;
}) {
	return (
		<a
			href={githubUrl}
			target="_blank"
			rel="noreferrer noopener"
			className="text-foreground inline tracking-tight hover:underline"
		>
			<span className="inline-block size-4 align-middle [&_svg]:size-4 [&_svg]:block [&_svg]:translate-y-[-1px]">
				{logo}
			</span>{" "}
			<span className="tracking-tight">{name}</span>
		</a>
	);
}

const AuburnRFIDLabLogo = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 250 220.58984"
		aria-hidden
	>
		<title>Auburn University RFID Lab</title>
		<g transform="matrix(1.25 0 0 -1.25 -376.63 815)">
			<g>
				<path
					d="m453.31 600.28v-8.6562l-4.3106 8.6562h4.3106m-103.36 0h4.3106l-4.3106-8.6562v8.6562m51.52-92.21c-25.53 0-33.87 3.538-42.869 8.5421-0.75501 0.41262-1.4222 0.83401-2.0456 1.2466h26.715v28.076h-16.25l7.2077 12.818h56.459l7.3042-13.195h-18.269v-27.698h26.654c-0.62332-0.41262-1.2905-0.83401-2.0455-1.2466-8.9986-5.0041-17.339-8.5421-42.86-8.5421m0.89548 100.61 12.212-21.474h-24.59l12.379 21.474zm98.3-8.3841v28.076h-61.463v-11.808l-19.621 34.792h-36.17l-19.683-34.897v11.913h-61.463v-28.076h12.379s-0.009-34.265-0.0176-54.738h-11.773v-27.698h12.335c1.2203-7.6993 4.6705-16.066 14.117-23.028 14.942-11.009 32.939-18.348 72.165-18.348 39.216 0 57.214 7.3394 72.156 18.348 7.9012 5.8206 11.553 15.293 13.239 23.028h13.265v27.698h-11.826v54.738h12.361z"
					fill="#f26522"
				/>
				<path
					d="m106.71 7.791l-74.564 132.26h-23.22l-0.0002 20.63h86.529v-21.1h-25.283l16.889-30.02h78.779l16.88 30.49h-27.71v20.63h86.53v-20.63h-23.22l-74.57-132.26-37.04 0.001zm72.65 28.742v20.17h17.35v30.77l25.69 45.577h4.33v-75.415h15.47v-21.102h-62.84zm-171.17 0.002v21.102h15.473v75.413h4.391l25.623-45.443v-30.902h17.349v-20.17h-62.836zm118.18 3.541l27.24 47.912h-54.874l27.634-47.912zm-101.9 127.6c1.47 7.95 5.256 16.21 14.672 23.14 17.821 13.14 38.693 21.58 86.059 21.58 47.36 0 68.23-8.44 86.06-21.58 9.41-6.93 13.19-15.19 14.67-23.14h-34.11c-2.17 2.66-5.25 5.22-9.65 7.67-12.66 7.03-24.61 11.55-56.97 11.55-32.365 0-44.326-4.52-56.979-11.55-4.401-2.45-7.485-5.01-9.647-7.67h-34.105z"
					transform="matrix(.8 0 0 -.8 301.31 652)"
					fill="#03244d"
				/>
			</g>
		</g>
	</svg>
);

const CronarchLogo = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 391.34 391.34"
		aria-hidden
	>
		<title>Cronarch</title>
		<g>
			<path d="M308.55,290.67c5.23-6.18,9.93-12.8,14.13-19.8,13.1-22,20.6-47.76,20.6-75.21s-7.51-53.2-20.6-75.28c-4.12-6.99-8.83-13.54-14.06-19.72l13.91-24.14,11.18-19.43c-3.09-3.16-6.33-6.18-9.71-9.05-9.49-8.32-19.87-15.75-30.91-22.08C264.4,9.42,231.21,0,195.67,0s-68.73,9.42-97.36,25.98c-11.04,6.33-21.41,13.69-30.98,22.08-3.39,2.87-6.62,5.89-9.71,8.98l11.18,19.43,13.98,24.21c-5.23,6.18-9.93,12.8-14.13,19.8-13.1,22-20.6,47.76-20.6,75.21s7.51,53.2,20.6,75.28c4.12,6.99,8.83,13.54,14.06,19.72l-13.91,24.14-11.18,19.43c3.09,3.16,6.33,6.18,9.71,9.05,9.49,8.32,19.87,15.75,30.91,22.08,28.7,16.56,61.89,25.98,97.43,25.98s68.73-9.42,97.36-25.98c11.04-6.33,21.41-13.69,30.98-22.08,3.39-2.87,6.62-5.89,9.71-8.98l-11.18-19.43-13.98-24.21ZM310.91,140.85c7.95,16.56,12.36,35.18,12.36,54.82h0c0,19.65-4.42,38.27-12.36,54.82-3.6,7.65-8.02,14.86-13.02,21.56l-44.08-76.39h0l41.43-71.82,2.65-4.56c5,6.7,9.42,13.91,13.02,21.56ZM297.51,311.35l-6.55-2.94-20.68-9.35-60.49-27.3,32.45-56.07,41.65,72.12,10.3,17.74,3.31,5.81ZM242.25,175.65l-32.45-56.07,55.26-24.95,5.3-2.43,20.6-9.27,6.55-2.94-3.31,5.74-10.3,17.81-3.46,5.96-38.19,66.16ZM205.6,21.85c9.86.52,19.5,1.91,28.92,4.12,19.21,4.34,37.24,11.92,53.43,22.08,4.41,2.65,8.76,5.3,13.17,8.02-4.42,2.06-8.76,4.05-13.17,6.11l-12.66,5.89-3.02,1.4-22.59,10.15-.44.22-43.64,19.72V21.85ZM103.39,48.05c16.19-10.16,34.22-17.73,53.43-22.08,9.42-2.21,19.06-3.61,28.92-4.12v77.71l-43.64-19.72-18.18-8.24c-1.62-.66-3.24-1.4-4.86-2.13-2.13-.88-4.34-1.84-6.48-2.8-.07,0-.15-.07-.15-.07-7.51-3.16-15.01-6.4-22.44-9.64,4.49-2.94,8.98-5.96,13.39-8.9ZM181.54,119.58l-32.45,56.07-41.65-72.12-10.3-17.74-3.31-5.81,6.55,2.94,20.68,9.35,60.49,27.3ZM80.43,250.49c-7.95-16.56-12.36-35.18-12.36-54.82h0c0-19.65,4.42-38.27,12.36-54.82,3.6-7.65,8.02-14.86,13.02-21.56l44.08,76.39h0l-41.43,71.82-2.65,4.56c-5-6.7-9.42-13.91-13.02-21.56ZM149.09,215.69l32.45,56.07-55.26,24.95-5.3,2.43-20.6,9.27-6.55,2.94,3.31-5.74,10.3-17.81,3.46-5.96,38.19-66.16ZM185.74,369.49c-9.86-.52-19.5-1.91-28.92-4.12-19.21-4.34-37.24-11.92-53.43-22.08-4.41-2.65-8.76-5.3-13.17-8.02,4.41-2.06,8.76-4.05,13.17-6.11l12.66-5.89,3.02-1.4,22.59-10.15.44-.22,43.64-19.72v77.71ZM185.74,239.01l-25.17-43.34h.07l25.09-43.34v43.34h0v43.34ZM205.6,152.33l25.17,43.34h-.07l-25.09,43.34v-43.34h0v-43.34ZM287.95,343.29c-16.19,10.16-34.22,17.73-53.43,22.08-9.42,2.21-19.06,3.61-28.92,4.12v-77.71l43.64,19.72,18.18,8.24c1.62.66,3.24,1.4,4.86,2.13,2.13.88,4.34,1.84,6.48,2.8.07,0,.15.07.15.07,7.51,3.16,15.01,6.4,22.44,9.64-4.49,2.94-8.98,5.96-13.39,8.9Z" />
			<path d="M391.34,195.67c0-45.84-15.75-87.94-42.17-121.27l-11.7,20.31c20.38,28.48,32.31,63.36,32.31,100.96h0c0,37.6-11.92,72.48-32.31,100.96l11.77,20.24c26.35-33.33,42.09-75.35,42.09-121.2h0Z" />
			<path d="M21.56,195.67c0-37.6,11.92-72.48,32.31-100.96l-11.77-20.24C15.75,107.81,0,149.83,0,195.67h0c0,45.84,15.75,87.94,42.17,121.27l11.7-20.31c-20.38-28.48-32.31-63.36-32.31-100.96h0Z" />
		</g>
	</svg>
);

const companies = [
	{
		name: "Auburn University RFID Lab",
		githubUrl: "https://github.com/AU-RFID",
		logo: <AuburnRFIDLabLogo />,
	},
	{
		name: "Cronarch",
		githubUrl: "https://github.com/Cronarch",
		logo: <CronarchLogo />,
	},
] as const;

const connectLinks = [
	{ href: "mailto:caleb@cronarch.com", label: "Mail", icon: Mail },
	{ href: "https://github.com/cnbrown04", label: "GitHub", icon: Github },
	{
		href: "https://linkedin.com/in/cnbrown04",
		label: "LinkedIn",
		icon: Linkedin,
	},
] as const;

const projects = [
	{
		title: "EAGLE Platform",
		description:
			"Current ongoing project with the RFID Lab at Auburn University to support Fortune 500 companies audit, track and manage their RFID assets.",
		href: "https://eagle.rfidlab.org",
		image: "/projects/eagle.png",
	},
	{
		title: "Cronarch",
		description: "Software contracting company founded in 2025 to provide software development and consulting services.",
		href: "https://cronarch.com",
		image: "/projects/cronarch-web.png",
	},
] as const;

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
	const [hovered, setHovered] = useState(false);
	const { title, description, href, image } = project;

	return (
		<li>
			<a
				href={href}
				className="block touch-manipulation overflow-hidden rounded-lg border border-border bg-background transition-[box-shadow] duration-300 hover:shadow-md"
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
				{image && (
					<motion.div
						initial={false}
						animate={{ height: hovered ? "auto" : 0 }}
						transition={{
							type: "tween",
							duration: 0.3,
							ease: [0.4, 0, 0.2, 1],
						}}
						className="overflow-hidden"
					>
						<div className="aspect-video w-full">
							<img src={image} alt="" className="h-full w-full object-cover" />
						</div>
					</motion.div>
				)}
				<div className="px-4 py-3 transition-colors hover:bg-muted/50">
					<span className="font-medium text-foreground hover:underline">
						{title}
					</span>
					<p className="text-muted-foreground mt-1 text-sm">{description}</p>
				</div>
			</a>
		</li>
	);
}

function App() {
	return (
		<div className="min-h-screen bg-stone-50">
			<header className="flex justify-center pt-8">
				<div className="w-full min-w-[200px] max-w-2xl">
					<Signature />
				</div>
			</header>

			<main className="mx-auto max-w-2xl px-6 pb-16 pt-2.5">
				<section className="mb-12 space-y-1 [&>*]:text-base [&>*]:leading-7">
					<p className="text-muted-foreground">
						I work as a Product Development Manager at{" "}
						<CompanyLink
							name={companies[0].name}
							githubUrl={companies[0].githubUrl}
							logo={companies[0].logo}
						/>{" "}
						and founded{" "}
						<CompanyLink
							name={companies[1].name}
							githubUrl={companies[1].githubUrl}
							logo={companies[1].logo}
						/>
						, a software contracting company.
					</p>
					<p className="text-muted-foreground mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-base leading-relaxed">
						{connectLinks.map(({ href, label, icon: Icon }, i) => (
							<span key={label} className="inline-flex items-center gap-x-2">
								{i > 0 && <span className="text-muted-foreground/60">·</span>}
								<a
									href={href}
									target={href.startsWith("mailto:") ? undefined : "_blank"}
									rel={
										href.startsWith("mailto:")
											? undefined
											: "noreferrer noopener"
									}
									className="text-foreground inline-flex items-center gap-x-1.5 hover:underline"
								>
									<Icon className="size-3.5 shrink-0" aria-hidden />
									{label}
								</a>
							</span>
						))}
					</p>
				</section>

				<section>
					<h2 className="text-foreground mb-6 text-sm font-medium uppercase tracking-wider">
						Work
					</h2>
					<ul className="flex flex-col gap-4">
						{projects.map((project) => (
							<ProjectCard key={project.title} project={project} />
						))}
					</ul>
				</section>
			</main>
		</div>
	);
}
