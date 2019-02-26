import React, { Component } from 'react'
import Player from './Player'
import AddPlayer from './AddPlayer';
import './Scoreboard.css'

export default class Scoreboard extends Component {
    state = {
      players: [
        {
          id: 1,
          name: 'Wouter',
          score: 2
        },
        {
          id: 2,
          name: 'Mimi',
          score: 5
        },
        {
          id: 3,
          name: 'Milan',
          score: 4
        }
      ]
    }

    addPlayer = (name) => {
        const player = {
          id: Math.round(Math.random()*100000),
          name,
          score: 0
        }
        this.setState({
          players: this.state.players.concat(player)
        })
      }


    updatePlayerScore = (id, score) => {
        const updatedPlayers = this.state.players.map(
          player => {
            if (player.id === id) {
              return {
                ...player,
                score
              }
            }
            else {
              return player
            }
          }
        )
        this.setState({ players: updatedPlayers })
    }

    deletePlayer = (id) => {
        const updatedPlayers = this.state.players.filter(player => player.id !== id);
        this.setState({ players: updatedPlayers })
    }
  
    renderPlayer = (player) => {
      return (
        <Player
          id={player.id}
          name={player.name}
          score={player.score}
          key={player.id}
          updatePlayerScore={this.updatePlayerScore}
          deletePlayer={this.deletePlayer}
        />
      )
    }
  
    render() {
      return (
        <div className="scoreboard">
          <h1>Scoreboard</h1>
          <ul>
            {
              this.state.players
                .sort((a, b) => b.score - a.score)
                .map(this.renderPlayer)
            }
          </ul>
          <AddPlayer addPlayer={this.addPlayer} />
        </div>
      )
    }
  }