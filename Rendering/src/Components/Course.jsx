
// Header component
const Header = (props) => {
    return (<h1> {props.course}</h1>)
}
// Part component
const Part = (props) => {
    return (
        <p>
            {props.part.name} - {props.exercises} exercises
        </p>
    )
}
// Content component
const Content = (props) => {
    return (
        // Calling the parts components and passing the variables in as props
        <div>
            <Part
                part={props.part1}
                exercises={props.exercises1}
            />
            <Part
                part={props.part2}
                exercises={props.exercises2}
            />
            <Part
                part={props.part3}
                exercises={props.exercises3}
            />
        </div>
    )
}

// Component for the total
const Total = (props) => {
    return (
        <div>
            <p>Number of exercises - {props.exercises1 + props.exercises2 +
                props.exercises3}</p>
        </div>
    )
}

const Course = ({course}) => {
    
    return (
        <div>
            {/* Calling on the header and content components and passing the variables in
as props */}
            <Header course={course} />
            <Content
                part1={part1}
                exercises1={part1.exercises}
                part2={part2}
                exercises2={part2.exercises}
                part3={part3}
                exercises3={part3.exercises}
            />
            <Total
                exercises1={part1.exercises}
                exercises2={part2.exercises}
                exercises3={part3.exercises}
            />
        </div>
    )
}

export default Course