import { Outlet } from "@remix-run/react";
import clientStyles from "~/styles/client.css";

export const links = () => [
    { href: clientStyles, rel: 'stylesheet' }
];

export default function ClientLayout () {
    return (
        <main className="client-layout">
            <h2 className="client-header">Client detail</h2>
            <Outlet />
        </main>
    )
}