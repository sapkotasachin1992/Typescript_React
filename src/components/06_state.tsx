import { useState } from "react";


export function Counter() {

    const [count, setCount] = useState<number>(0)

    return <div>
        {
            count
        }
    </div>
}

//working with unions on useState()
//designing loader
// loading can be in different states like: idle,loading,success,error
type LoadState =
    | { status: 'idle' }
    | { status: 'loading' }
    | { status: 'success'; data: string }
    | { status: 'error'; message: string }


function heavyDefault(): number {
    return 100
}

export function LoaderDemo() {
    // const [state, setState] = useState<LoadState>({ status: "success", data: "hi" })
    const [state, setState] = useState<LoadState>({ status: "idle" })

    async function fetchData() {
        setState({ status: "loading" })

        //api call here

        setState({ status: "success", data: "success" })

        //Catch
        setState({ status: "error", message: "error occured" })
    }
    return <div>Loader</div>
}


//do not directly use null in usestate instead do
type user = {
    name: string
}

const [user, setUser] = useState<user | null>(null)
