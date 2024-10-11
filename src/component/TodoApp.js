import React, { Component } from 'react'
import "./TodoApp.css";

export default class  extends Component {
    state = {
        input:"",
        items: []
    }

    handleChange = event =>{
        this.setState ({
            input: event.target.value
        });

    };

    StoreItems = event =>{
        event.preventDefault();
        const { input } = this.state;


        this.setState({
            items:[...this.state.items, input],
            input: ""
        });

    };

    deleteItem=index =>{
        const allItems = this.state.items;

        allItems.splice(index, 1); 
        this.setState({
            items:allItems 
        });
        

    };

    
  render() {
    const { input,items } = this.state;
    
    return (
      <div className="todo-container">

        <form className='input-section' onSubmit={this.StoreItems}>
        <h1>TodoApp</h1>
            <input type='text' value={input} onChange={this.handleChange} placeholder='Enter Items...'></input>
        </form>

        <ul>

            {items.map((data,index)=>(
                <li key={index}>{data}<i className="fa-regular fa-trash-can" onClick={() =>this.deleteItem (index)}></i></li>
            ))}

                
            </ul>



      </div>
    )
  }
}
