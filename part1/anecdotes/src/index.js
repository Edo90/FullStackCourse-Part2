import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => {
    return (
        <>
            <button onClick={handleClick()}>{text}</button>
        </>
    )
}

const Title = ({ title }) => {
    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

const Anecdote = ({ text }) => {
    return (
        <div>
            <p>{text}</p>
        </div>
    )
}

const Total = ({ total }) => {
    return (
        <div>
            <span>has {total} votes</span>
        </div>
    )
}

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [vote, setVote] = useState(0);
    const [points, setPoints] = useState([])
    const [mostVotedPosition, setMostVotedPosition] = useState(0)


    const nextAnecdote = () => () => {
        const random = getRandom()
        setVote(random)
        setSelected(random)
    }

    const handleVote = () => () => {
        const copy = [...points]
        if (copy[vote] === undefined) {
            copy[vote] = 0
        }
        copy[vote] += 1
        setPoints(copy)

        if (copy[vote] > copy[mostVotedPosition]) {
            setMostVotedPosition(vote)
        }

    }

    return (
        <div>
            <Title title="Anecdote of the day"></Title>
            <Anecdote text={props.anecdotes[selected]}></Anecdote>
            <Total total={points[vote] === undefined ? 0 : points[vote]}></Total>

            <Button handleClick={handleVote} text="vote"></Button>
            <Button handleClick={nextAnecdote} text="next anecdote"></Button>
            <br></br>
            <Title title="Anecdote with most votes"></Title>
            <Anecdote text={props.anecdotes[mostVotedPosition]}></Anecdote>
            <Total total={points[mostVotedPosition] === undefined ? 0 : points[mostVotedPosition]}></Total>

        </div>)
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const min = 0
const max = anecdotes.length
const getRandom = () => Math.floor(Math.random() * (+max - +min)) + +min

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)