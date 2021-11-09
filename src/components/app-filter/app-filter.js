import { Component } from 'react';
import './app-filter.css';

// class AppFilter extends Component{

//     constructor(props) {
//         super(props);
//         this.state = {
//             filter: "",
//         }
//     }

// onFilter = (e) => {
//     if(e.target.innerText === "Все сотрудники") {
//         this.setState({filter: "All"})
//     }     
//     if(e.target.innerText === "На повышение") {
//         this.setState({filter: ""})
//     }
//     if(e.target.innerText === "З/П > 1000$") {
//         this.setState({filter: ""})
//     }
// //console.dir(e);
// }

//     render() {
//         return(<div className="btn-group">
//             <button className="btn btn-light" type="button" onClick={this.onFilter}>
//                 Все сотрудники
//             </button>
//             <button className="btn btn-outline-light" type="button" onClick={this.onFilter}>
//                 На повышение
//             </button>
//             <button className="btn btn-outline-light" type="button" onClick={this.onFilter}>
//                 З/П > 1000$
//             </button>
//         </div>)
//     }
// }

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThen1000', label: 'З/П > 1000$'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button className={`btn ${clazz}`} type="button" key={name} onClick={()=>props.onFilterSelect(name)}>
            {label}
        </button> 
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;