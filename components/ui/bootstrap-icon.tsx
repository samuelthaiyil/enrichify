import * as React from "react"
import * as BsIcons from "react-icons/bs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const bootstrapIconVariants = cva(
	"shrink-0",
	{
		variants: {
			size: {
				xs: "size-3",
				sm: "size-4",
				md: "size-5",
				lg: "size-6",
				xl: "size-8",
				"2xl": "size-10",
			},
		},
		defaultVariants: {
			size: "md",
		},
	}
)

export type BootstrapIconNames = keyof typeof BsIcons

export interface BootstrapIconProps
	extends Omit<React.SVGProps<SVGSVGElement>, "children">,
		VariantProps<typeof bootstrapIconVariants> {
	name: BootstrapIconNames
	className?: string
}

const BootstrapIcon = React.forwardRef<SVGSVGElement, BootstrapIconProps>(
	({ className, size, name, ...props }, ref) => {
		const IconComponent = React.useMemo(() => {
			return BsIcons[name] as unknown as React.ComponentType<
				React.SVGProps<SVGSVGElement>
			>
		}, [name])

		if (!IconComponent) {
			console.warn(`BootstrapIcon "${name}" not found`)
			return null
		}

		return (
			<IconComponent
				ref={ref}
				className={cn(bootstrapIconVariants({ size, className }))}
				{...props}
			/>
		)
	}
)

BootstrapIcon.displayName = "BootstrapIcon"

export { BootstrapIcon, bootstrapIconVariants }


