import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Import all Heroicons (outline and solid)
import * as HeroiconsOutline from "@heroicons/react/24/outline"
import * as HeroiconsSolid from "@heroicons/react/24/solid"

const heroiconVariants = cva(
  "shrink-0",
  {
    variants: {
      variant: {
        outline: "",
        solid: "",
      },
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
      variant: "outline",
      size: "md",
    },
  }
)

// Create a type for all available icon names
type OutlineIconNames = keyof typeof HeroiconsOutline
type SolidIconNames = keyof typeof HeroiconsSolid
type IconNames = OutlineIconNames | SolidIconNames

export interface HeroiconProps
  extends Omit<React.SVGProps<SVGSVGElement>, "children">,
    VariantProps<typeof heroiconVariants> {
  name: IconNames
  variant?: "outline" | "solid"
}

const Heroicon = React.forwardRef<SVGSVGElement, HeroiconProps>(
  ({ className, variant = "outline", size, name, ...props }, ref) => {
    // Get the appropriate icon based on variant
    const IconComponent = React.useMemo(() => {
      if (variant === "solid") {
        return HeroiconsSolid[name as SolidIconNames] as React.ComponentType<React.SVGProps<SVGSVGElement>>
      }
      return HeroiconsOutline[name as OutlineIconNames] as React.ComponentType<React.SVGProps<SVGSVGElement>>
    }, [name, variant])

    if (!IconComponent) {
      console.warn(`Heroicon "${name}" not found in ${variant} variant`)
      return null
    }

    return (
      <IconComponent
        ref={ref}
        className={cn(heroiconVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)

Heroicon.displayName = "Heroicon"

export { Heroicon, heroiconVariants, type IconNames }
