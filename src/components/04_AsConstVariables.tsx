import type React from "react";


const VARIANtS = ['primary', 'secondary', 'ghost'] as const

type Variant = (typeof VARIANtS)[number]


type BadgeProps = {
    label: string;
    variant?: Variant
}

export function Badge({ label, variant = "primary" }: BadgeProps) {
    const styles: Record<Variant, React.CSSProperties> = {
        primary: {
            color: "red"

        },

        secondary: {
            color: "yellow"
        },

        ghost: {
            color: "black"
        }


    }
    return <span style={styles[variant]}>{label}</span>
}