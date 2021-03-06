import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './AddPlayer.css'


export default class AddPlayer extends Component {
    state = {name:''}
    static propTypes = {
        addPlayer: PropTypes.func.isRequired
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.name.length > 2) {
        this.props.addPlayer(this.state.name)
        this.setState({
            name : ''
        });
        } else {
            alert(`name should be at least two characters long`);
        }
      }

      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }


    render() {
        return (
            <div className="add-player">
                <form onSubmit={this.handleSubmit}>
                  <label>
                   Name:
                   <input
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                  />
                  </label>
                  <input type="submit" value="Add" />
                </form>
            </div>
    )
  }
}

