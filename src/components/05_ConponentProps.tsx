import type { ComponentProps, CSSProperties } from "react"

type ButtonTypeProps = ComponentProps<"button"> //this teels that i can freely accept all the properties related to button like. onClick,id, type, disabled ,style

type ButtonProps = ButtonTypeProps & { variant?: 'primary' | 'secondary' } //now we are adding our own custom propertis along with the default properties

export function Button({ variant = 'primary', style, ...rest }: ButtonProps) {
    //in paramater we are sure that we will pass variant and style but rest of the things we are not sure so we do ...rest.

    const base: CSSProperties = {
        padding: '10px'
    }

    return <button style={{ ...base, ...style }} {...rest} />
    //for above style parameter we are telling add the css properties defined in base and also add css properties that is passed as style from button component.
    //{...rest} means now add all the extra properties that is passed in button




}