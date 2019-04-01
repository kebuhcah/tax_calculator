'use strict';

const el = React.createElement;

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1000000,
            text: '1000000'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return el("div", null, el("h3", null, "Transfer Tax Calculator"),
            el("form", {
                    onSubmit: this.handleSubmit
                }, el("label", {
                    htmlFor: "new-todo"
                }, "Taxes on a residential property sold for..."),
                el("div", {
                        className: "input-group"
                    },
                    el("div", {
                            className: "input-group-prepend"
                        },
                        el("span", {
                            className: "input-group-text"
                        }, "$")),
                    el("input", {
                        id: "new-todo",
                        onChange: this.handleChange,
                        value: this.state.text,
                        type: "number",
                        min: 0,
                        step: 0.01
                    }),
                    el("div", {
                            className: "input-group-append"
                        },
                        el("button", {
                            className: "btn btn-primary"
                        }, "Calculate"))
                )),
            el(TodoList, {
                value: this.state.value
            }));
    }

    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.text.length) {
            return;
        }

        this.setState(state => ({
            text: this.state.text,
            value: parseFloat(this.state.text)
        }));
    }

}

class TodoList extends React.Component {
    render() {
        return el("h4", null, this.props.value / 2);
    }

}

const domContainer = document.querySelector('#calculator_container');
ReactDOM.render(el(TodoApp), domContainer);
