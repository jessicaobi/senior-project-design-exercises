import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



//Application
const App = () => {

  // Setting variables for good, neutral, and bad variables
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //Statistics component that shows the stats of the votes
  const Statistics = (props) => {
    if (props.good == 0 && props.neutral == 0 && props.bad == 0) {
      return (
        <p>No feedback given</p>
      )
    }
    else {
      return (

        <div>

          <p>all: {good + neutral + bad}</p>
          <p>average: {((good * 1) + (neutral * 0) + (bad * -1)) / (good + neutral + bad)}</p>
          <p>positive: {((good) / (good + neutral + bad)) * 100}%</p>


        </div>


      )
    }
  }


  //Anecdotes
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  //Setting an array votes of the length of the array anecdotes and setting each in index to 0
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  //Handling the upvotes
  const handleUpvote = () => {
    const newVotes = [...votes];
    newVotes[randomIndex2] += 1;
    setVotes(newVotes);

    // Update anecdoteMostVotes to the index of the anecdote with the most votes
    const maxVotes = Math.max(...newVotes);
    const maxIndex = newVotes.indexOf(maxVotes);
    setAnecdoteMostVotes(maxIndex);
  };



  //Basic variables for the vote related answers
  const [selected, setSelected] = useState(anecdotes[1])
  const [randomIndex2, setRandomIndex2] = useState(0)
  const [anecdoteMostVotes, setAnecdoteMostVotes] = useState(0)

  //Choosing a random string
  const selectRandomString = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(anecdotes[randomIndex]);
    //console.log(selected)
    setRandomIndex2(randomIndex)
  };

  return (
    <div>
      <h1> Voting </h1>
      {/* Give feedback */}
      <div>
        <button onClick={() => setGood((good) => good + 1)}>good</button>

        <button onClick={() => setNeutral((neutral) => neutral + 1)}>neutral</button>

        <button onClick={() => setBad((bad) => bad + 1)}>bad</button>

      </div>
      <p>good: {good} </p>
      <p>neutral: {neutral} </p>
      <p>bad: {bad} </p>

      {/* Setting the votes to the statistics component */}
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />





      <div>
        <h1> Anecdotes
        </h1>
      </div>



      {/* Displaying a random anecdote and the anecdote with the highest votes */}
      <div>
        {selected} has {votes[randomIndex2]} votes
      </div>
      {/* Annecdote with the most votes */}
      <div>
        <p>
          {anecdotes[anecdoteMostVotes]} has the most votes at {votes[anecdoteMostVotes]} votes
        </p>      </div>
      <button onClick={() => selectRandomString()}>next anecdote</button>
      <button onClick={() => handleUpvote()}>upvote</button>
    </div>
  )
}



export default App