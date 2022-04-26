import { json } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";
import { flag } from 'country-emoji';
import { getClient } from '~/api/client.server';

/**
 * Loader functions are only run on the server,
 * Can hit the database directly here if needed
 */
export const loader = async ({ params }) => {
    const client = await getClient(params.id);
    if (!client) {
        throw new Response("Client not found", { status: 404 });
    }
    return json(client);
}

/**
 * Meta function receives data returned from loader above
 * so we can set page titles dynamically
 */
export const meta = ({ data }) => {
    return {
        title: `${data?.name || 'Missing Client'} | Context Labs`
    };
}

// Render "Not found" for invalid clients
export const CatchBoundary = () => {
    const caught = useCatch();
    return (
        <div className="client-error">
            {caught.data}
        </div>
    );
}

export default function ClientRoute() {
    const { avatar, name, nationality, title, quote } = useLoaderData();
    return (
        <div className="client-details">
            <img alt={name} className="client-image" height={128} src={avatar} width={128} />
            <div className="client-summary">
                {quote ? <blockquote className="client-quote">{quote}</blockquote> : null}
                <h3 className="client-name" dangerouslySetInnerHTML={{ __html: name }} />
                <p className="client-title">Title: {title}</p>
                {nationality ? (
                    <p className="client-nationality">
                        Nationality: <span className="nationality-flag">{flag(nationality)}</span>{nationality}
                    </p>
                ) : null}
            </div>
        </div>
    );
}