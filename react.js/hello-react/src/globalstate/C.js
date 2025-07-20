import { useContext } from "react"
import OrgContext from "./OrgConext"

export default function C() {
    const data = useContext(OrgContext) // {org:ABC,names:[abc,ram]}
    return (
        <div>
            <h2>C Component</h2>
            <p>{data.org}</p>
            <h3>List of names</h3>
            <ul>
                {data.names.map(name => (
                    <p>{name}</p>
                ))}
            </ul>
        </div>
    )
}
