import type { ReactNode } from "react";
import { UserCard } from "./components/01_RequiredOptionalProps";
import { Greet } from "./components/02_DefaultProps";
import { RequiredChildren, UserData } from "./components/03_ChildrenReactNode";


function App() {



  return (
    <>
      <UserCard id="1" name="sachin" subtitle=<h1>This is Subtitles</h1> />
      <Greet name="sachin" shout={true} />
      <UserData title="Show Data" children=<em>This is children</em> />
      <RequiredChildren title="show Children" >
        children
      </RequiredChildren>
    </>
  )
}

export default App
