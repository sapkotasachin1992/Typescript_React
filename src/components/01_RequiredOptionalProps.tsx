import type { ReactNode } from "react"; //importing ReactNode as type only


interface UserCardProps {
    id: string;
    name?: string;
    subtitle?: ReactNode;//we use ReactNode because subtilte can by anything . you can see what ReactNode contains.We can receive subtitle in may format's

}


export function UserCard({ id, name, subtitle }: UserCardProps) {
    const displayName = name ?? "Guest"
    return (
        <div>
            <strong>#{id}</strong>
            <p>{displayName}</p>
            {
                subtitle ? subtitle : null
            }
        </div>
    )
}