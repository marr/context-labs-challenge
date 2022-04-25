import { NavLink } from "@remix-run/react";

export default function Header () {
    return (
        <nav style={{ padding: '1.5rem' }}>
            <NavLink to="/">Home</NavLink>
        </nav>
    )
}