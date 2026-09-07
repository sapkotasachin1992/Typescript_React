

type GreetProps = {
    name?: string;
    shout?: boolean
}


export function Greet({ name = "Guest", shout = false }: GreetProps) {
    const text = shout ? name.toUpperCase() : name
    return <p>{text}</p>
}