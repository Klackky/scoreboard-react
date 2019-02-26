import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Player.css'
import Button from './Button.js'
import DeleteButton from './DeleteButton.js'

export default class Player extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        updatePlayerScore: PropTypes.func.isRequired
      }
    
      handleOnClick = () => {
        const {id, score} = this.props
        this.props.updatePlayerScore(id, score + 1)
      }

      deleteOnClick = () => {
          const {id} = this.props
          this.props.deletePlayer(id);
      }

  render() {
    return (
      <li className="player">
        <p className="name">{ this.props.name }</p>
        <p className="score">{ this.props.score }</p>
        <Button onClick={this.handleOnClick} />
        <DeleteButton onClick={this.deleteOnClick} />
      </li>
    )
  }
}