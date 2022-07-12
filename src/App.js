import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import Portsec from "./pages/Porfoliopagecontent/Portfolio"
// import Mainsec from "./Maincomponents/PageMain"
function App(){
    return(
        <div className="App">
            <BrowserRouter>
                <Portsec/>
            </BrowserRouter>

        </div>
    )
}
export default App;