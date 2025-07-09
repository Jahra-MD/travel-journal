import Entry from "./component/Entry"
import Header from "./component/HeaderComponent"
import data from "./data.js"

function App() {
  const entryList = data.map((entry)=>{
    return (
      <Entry key={entry.id}
      {...entry}
       />
    )
  })
  return (
    <>
    <Header/>
        {entryList}
    </>
  )
}

export default App
