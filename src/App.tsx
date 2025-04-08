import GetCatLayout from "./components/layouts/GetCatLayout/GetCatLayout"

import { Provider } from "./components/ui/provider"

function App() {

  return (
    <div>
      <Provider>
        <GetCatLayout />
      </Provider>
    </div>
  )
}

export default App
