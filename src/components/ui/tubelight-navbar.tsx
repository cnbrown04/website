import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
	name: string;
	url: string;
	icon: LucideIcon;
}

interface NavBarProps {
	items: NavItem[];
	className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
	const pathname = useRouterState({ select: (s) => s.location.pathname });

	return (
		<div
			className={cn(
				"fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4 pt-2",
				className,
			)}
		>
			<div className="flex items-center gap-3 bg-background/95 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
				{items.map((item) => {
					const Icon = item.icon;
					const isActive =
						pathname === item.url ||
						(item.url !== "/" && pathname.startsWith(item.url));

					return (
						<Link
							key={item.name}
							to={item.url}
							className={cn(
								"relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
								"text-foreground/80 hover:text-primary",
								isActive && "bg-muted text-primary",
							)}
						>
							<span className="hidden md:inline">{item.name}</span>
							<span className="md:hidden">
								<Icon size={18} strokeWidth={2.5} />
							</span>
							{isActive && (
								<motion.div
									layoutId="lamp"
									className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
									initial={false}
									transition={{
										type: "spring",
										stiffness: 300,
										damping: 30,
									}}
								>
									<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-b-full">
										<div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -bottom-2 -left-2" />
										<div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -bottom-1" />
										<div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm bottom-0 left-2" />
									</div>
								</motion.div>
							)}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
