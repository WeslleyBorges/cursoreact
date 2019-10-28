import React, { Component } from 'react'
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

export default class Calculator extends Component {
    // constructor(props) {
    //     super(props)

    //     this.cleanDisplay = this.cleanDisplay.bind(this)
    //     this.addDigit = this.addDigit.bind(this)
    //     this.setOperation = this.setOperation.bind(this)
    // }

    cleanDisplay() {
        console.log('limpou')
    }

    setOperation(op) {
        console.log(op)
    }

    addDigit(n) {
        console.log(n)
    }
    
    render(){
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)
        const cleanDisplay = _ => this.cleanDisplay() 
        return (
            <div className="calculator">
                <Display value={10000}></Display>
                <Button label="AC" triple
                    click={cleanDisplay}></Button>
                <Button label="/" click={setOperation} operator></Button>
                <Button label="7" click={addDigit}></Button>
                <Button label="8" click={addDigit}></Button>
                <Button label="9" click={addDigit}></Button>
                <Button label="*" click={setOperation} operator></Button>
                <Button label="4" click={addDigit}></Button>
                <Button label="5" click={addDigit}></Button>
                <Button label="6" click={addDigit}></Button>
                <Button label="-" click={setOperation} operator></Button>
                <Button label="1" click={addDigit}></Button>
                <Button label="2" click={addDigit}></Button>
                <Button label="3" click={addDigit}></Button>
                <Button label="+" click={setOperation} operator></Button>
                <Button label="0" click={addDigit} double></Button>
                <Button label="." click={addDigit}></Button>
                <Button label="=" click={setOperation} operator></Button>                
            </div>
        )
    }
}