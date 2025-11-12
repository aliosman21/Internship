
interface ComponentProps {
    name?: string
}

const Component = ({ name = 'Unknown' }: ComponentProps) => {
    return (
        <div>My name is {name}</div>
    )
}

export default Component