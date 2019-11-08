import React, {Component} from 'react';
import axios from "axios";
import {connect} from 'react-redux';
import './App.css';
import {edit, getData} from './redux/actions/actions';
import {store} from "./index";

class App extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
            id: null,
        };
        this.editText = this.editText.bind(this);
    }

    componentDidMount() {
    }

    /*request() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(res => {
                this.props.getData(res.data)
            })
    }*/

    editText(item) {
        this.setState(state => ({
            value: item.name,
            id: item.id
        }));
    }

    update(e) {
        const value = e.target.value;
        this.setState(state => ({
            value: value
        }));
    }

    save() {
        this.props.edit({
            id: this.state.id,
            value: this.state.value,
        });
        this.setState(state => ({
            id: null
        }));
    }

    request(){
       this.props.getData()
   }

    render() {
        return <div className="App">
            <button onClick={this.request.bind(this)}>GET</button>

            {

                    this.props.data.map((item) => {
                        return <div key={item.id}>
                            {
                                (item.id !== this.state.id) ?
                                    <div>{item.name}</div> :
                                    <input type="text" value={this.state.value} onChange={e => this.update(e)}/>
                            }
                            {
                                (item.id !== this.state.id) ?
                                    <button onClick={()=>this.editText(item)}>Edit</button> :
                                    <button onClick={this.save.bind(this)}>Save</button>
                            }

                        </div>
                    })
            }
        </div>
    }
}

const mapDispatchToProps = {
    getData,
    edit,
};
const mapStateToProps = (state, ownProps) => ({
    data: state.list
});

export default connect(mapStateToProps, mapDispatchToProps)(App)