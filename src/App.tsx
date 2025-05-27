import Panel from "./Panel"

function App() {
  return (
    <> 
      <div className='bg-zinc-900 h-screen w-screen flex'>
        <Panel></Panel>
        <div className="grid grid-rows-[1fr_auto_1fr]">
          <strong className="text-6xl text-white row-end-3">
          VS
          </strong>
        </div>
        <Panel></Panel>
      </div>
    </>
  )
}

export default App
