import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)
    const [all, setAll] = useState(0)


    const goodClick = () => () => {
        setGood(good + 1)
    }

    const neutralClick = () => () => {
        setNeutral(neutral + 1)
    }

    const badClick = () => () => {
        setBad(bad + 1)
    }

    const calculateAllStatistics = () => {
        setAll(good + neutral + bad)
        calculateAverage()
        calculatePositive()
    }

    const calculateAverage = () => {
        setAverage(((good - bad) / all))
    }

    const calculatePositive = () => {
        setPositive((good / all) * 100)
    }
    const Button = ({ handleClick, text }) => {
        return (
            <>
                <button onClick={handleClick()}>{text}</button>
            </>
        )
    }

    const Title = ({ title }) => {
        return (
            <>
                <h1>{title}</h1>
            </>
        )
    }

    const Statistic = ({ text, value, isPercentageValue }) => {
        if (isPercentageValue) {
            return (
                <>
                    <span>{text} {value} %</span> <br></br>
                </>
            )
        }
        else {
            return (
                <>
                    <span>{text} {value}</span> <br></br>
                </>
            )
        }
    }

    const Statistics = () => {
        calculateAllStatistics()
        if (all > 0) {
            return (
                <>
                    <Statistic text="good" value={good}></Statistic>
                    <Statistic text="neutral" value={neutral}></Statistic>
                    <Statistic text="bad" value={bad}></Statistic>
                    <Statistic text="average" value={average}></Statistic>
                    <Statistic text="positive" value={positive} isPercentageValue={true}></Statistic>

                </>
            )
        } else {
            return (
                <>
                    <span>No feedback given</span>
                </>
            )
        }

    }

    return (
        <>
            <Title title="give feedback"></Title>
            <Button handleClick={goodClick} text="good"></Button>
            <Button handleClick={neutralClick} text="neutral"></Button>
            <Button handleClick={badClick} text="bad"></Button>
            <Title title="statistics"></Title>
            <Statistics></Statistics>
        </>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)