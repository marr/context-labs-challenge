import { Link, Outlet } from "@remix-run/react";
import clientStyles from "~/styles/client.css";

export const links = () => [
    { href: clientStyles, rel: 'stylesheet' }
];

export const loader = ({ params }) => {
    if (!params.id) {
        throw new Error("Invalid Client id.");
    }
    return null;
}

export default function ClientLayout () {
    return (
        <main className="client-layout">
            <h2 className="client-header">Client detail</h2>
            <Outlet />
            <Link className="client-list" to="/">Back to Clients</Link>
        </main>
    )
}

// Renders errors thrown in loader or child routes
// Try just visiting /client to see it.
export function ErrorBoundary ({ error }) {
    return (
        <main className="client-error">
            {error.message}
        </main>
    )
}