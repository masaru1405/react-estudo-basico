
const Header = (props) => {
   return(
      <header>
         <h1>{props.title}</h1>
         <span>Players: {props.totalPlayers}</span>
      </header>
   )
}

const Player = (props) => {
   return(
      <div>
         <span>
            <button onClick={() => props.removePlayer(props.id)}>remove</button>
            {props.name}
         </span>
         <Counter />
      </div>
   )
}

class Counter extends React.Component{
   state = {
      score: 0
   }
   incrementScore = () => {
      this.setState(prevState => {
         return{
            score: prevState.score + 1
         }
      })
   }
   decrementScore = () => {
      if(this.state.score > 0){
         this.setState(prevState => {
            return{
               score: prevState.score - 1
            }
         })
      }  
   }
   render(){
      return(
         <div>
            <button onClick={this.decrementScore}> - </button>
            <span>{this.state.score}</span>
            <button onClick={this.incrementScore}> + </button>
         </div>
      )
   }
}

class App extends React.Component {
   state = {
      players: [
         {
            name: "Guil",
            id: 1
         },
         {
            name: "Treasure",
            id: 2
         },
         {
            name: "Ashley",
            id: 3
         },
         {
            name: "James",
            id: 4
         },
      ]
   }
   handleRemovePlayer = (id) => {
      this.setState(prevState => {
         return{
            players: prevState.players.filter(p => p.id !== id)
         }
      })
   }
   render(){
      return(
         <div>
            <Header title="Scoreboards" totalPlayers={this.state.players.length} />
   
            {/*Players list*/}
            {
               this.state.players.map(player => {
                  return(
                     <Player
                        name={player.name}
                        id={player.id}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                     />
                  )  
               })
            }
         </div>
      )
   } 
}

ReactDOM.render(
   <App />,
   document.getElementById('root')
)