import React, { Component } from 'react'


export default class Timerinput extends Component {
    render() {
        return (
            <>
                <h3 className='mb-3 '>Add your timer here</h3>
                <label htmlFor="">Minute</label>
                <input style={{padding:10, marginRight:20}} className="form-control w-50 mx-auto" type="number" minutes={this.props.minutes} onChange={this.props.handleChangeMin} min="0" max="60" required />

                {/* Sec <input style={{padding:10}} type="number" seconds={this.props.seconds} onChange={this.props.handleChangeSec} min="0" max="60" /> */}

            </>
        )
    }
}
