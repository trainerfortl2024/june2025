export default function Greeting({ name, role, names, employees }) {
    return (
        <div>
            <h1>Welcome to {name} - {role}</h1>
            {
                employees.map((emp,index) => {
                    return <p>{index+1} - {emp.name} - {emp.salary}</p>
                }
                )
            }
        </div>
    )
}