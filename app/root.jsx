import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import Header from '~/components/Header';
import reset from '~/styles/reset.css';
import styles from '~/styles/styles.css';

export const links = () => {
    return [{
        href: reset,
        rel: 'stylesheet'
    }, {
        href: styles,
        rel: 'stylesheet'
    }];
}

export const meta = () => ({
    charset: "utf-8",
    title: "Client Management | Context Labs",
    viewport: "width=device-width,initial-scale=1",
});

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
