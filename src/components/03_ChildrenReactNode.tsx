import { Children, type PropsWithChildren, type ReactNode } from "react";



type Data = {
    title: string;
    children?: ReactNode;

}

export function UserData({ title, children }: Data) {
    return (
        <section>
            <h1>{title}</h1>
            <div>{children ?? <em>No children Present</em>}</div>
        </section>
    )
}


interface RequiredChildrenProps extends PropsWithChildren {
    title: string;
    children: ReactNode;


}

export function RequiredChildren({ title, children }: RequiredChildrenProps) {
    return (
        <section>
            <h1>{title}</h1>
            <div>{children}</div>
        </section>
    )
}