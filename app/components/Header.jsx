import { NavLink, useMatches } from "@remix-run/react";
import ClientSearch from "./ClientSearch";

export default function Header () {
    const matches = useMatches();
    const isIndex = matches.filter(match => match.id === 'routes/index').length > 0;
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            {isIndex ? <ClientSearch /> : null}
        </nav>
    )
}