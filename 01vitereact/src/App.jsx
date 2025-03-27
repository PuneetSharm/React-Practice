import Chai from "./chai"


function App() {

  const username = "Puneet";
  return (
    <>
    <Chai />
    <h1>Puneet aur React {username}</h1> {/* evaluated expression(we write the final outcome) - {username} */}
    <p>test para</p>
    </>
  )
}

export default App
