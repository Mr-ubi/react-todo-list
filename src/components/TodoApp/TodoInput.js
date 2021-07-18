import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const{item, handleChange, handleSubmit, editItem} = this.props;
        return (
            <div className="card card-body my-3 text-center"> 
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <span class="input-group-text">I need to </span>
                        <input 
                        type="text"
                        className="form-control text-capitalize"
                        value={item}
                        onChange={handleChange}
                        aria-label="I need to input"/>
                    </div>
                    <button 
                    type="submit"
                    disabled={item?false:true}
                    className={
                        editItem?"btn btn-block btn-success mt-3 text-uppercase":"btn btn-block btn-primary mt-3 text-uppercase"
                    }>
                    {editItem?"Edit item" : "Add item"}
                    </button>
                </form>
            </div>
        )
    }
}
