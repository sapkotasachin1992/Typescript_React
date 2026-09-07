import { useState } from "react";
import { UserCard } from "./components/01_RequiredOptionalProps";
import { Greet } from "./components/02_DefaultProps";


function App() {


  return (
    <>
      <UserCard id="1" name="sachin" subtitle=<h1>This is Subtitles</h1> />
      <Greet name="sachin" shout={true} />
    </>
  )
}

export default App
