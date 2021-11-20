import React, { Component } from "react";

class Main extends Component {
    state = {
        counter: 0,
    };

    addOneHandler = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    addFiveHandler = () => {
        this.setState({ counter: this.state.counter + 5 })
    }
    removeOneHandler = () => {
        if (this.state.counter !== 0) {
            this.setState({ counter: this.state.counter - 1 })
        }
    }
    removeFiveHandler = () => {
        if (this.state.counter >= 5) {
            this.setState({ counter: this.state.counter - 5 })
        }
    }
    resetHandler = () => {
        this.setState({ counter: 0 });
    }

    render() {
        /*
        let circleClass = `${this.state.counter === 0
            ? ""
            : this.state.counter % 2 === 0
                ? "even"
                : "odd"
            } circle`;
        */
        let circleClass = "";
        if (this.state.counter === 0) {
            circleClass = "circle";
        } else if (this.state.counter % 2 === 0) {
            circleClass = "circle even";
        } else {
            circleClass = "circle odd";
        }
        /*
        this.state.counter === 0
            ? (circleClass = "circle")
            : this.state.counter % 2 === 0
                ? (circleClass = "circle even")
                : (circleClass = "circle odd");
    */

        return (
            <main>
                <div className={circleClass}>
                    <h1>{this.state.counter}</h1>
                </div>
                <div className="buttons">
                    <button className="add-one" onClick={this.addOneHandler}>Add one </button>
                    <button className="add-five" onClick={this.addFiveHandler}>Add five</button>
                    <button className="remove-one" onClick={this.removeOneHandler}>Remove one</button>
                    <button className="remove-five" onClick={this.removeFiveHandler}>Remove five</button>
                    <button className="reset" onClick={this.resetHandler}>Reset</button>
                </div>
            </main >
        );
    };
}

export default Main;