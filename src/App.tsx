import './App.css'
import Homework4 from "./homework/homework4/Homework4.tsx";
import {Homework2} from "./homework/homework2/Homework2.tsx";
import {Homework3} from "./homework/homework3/Homework3.tsx";
import {Homework} from "./homework/homework1/Homework.tsx";


function App() {
    return (<div className={'container'}>
        <div className={'work1 size'}>
            <h1>HomeWork 1</h1>
            <Homework/>
        </div>
        <hr/>
        <div className={'work2 size'}>
            <h1>HomeWork 2</h1>
            <Homework2/>
        </div>
        <hr/>
        <div className={'work3 size'}>
            <h1>HomeWork 3</h1>
            <Homework3/>
        </div>
        <hr/>
        <div className={'work4 size'}>
            <h1>HomeWork 4</h1>
            <Homework4/>
        </div>
    </div>)
}

export default App
