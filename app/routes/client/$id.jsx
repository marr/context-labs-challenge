import { useLoaderData } from "@remix-run/react";
import { flag } from 'country-emoji';
import { getClient } from '~/api/client.server';

/**
 * Loader functions are only run on the server,
 * Can hit the database directly here if needed
 */ 
export const loader = async ({ params }) => {
    const client = await getClient(params.id);
    return client;
}

export const meta = ({ data }) => {
    return {
        title: `${data.name} | Context Labs`
    };
}

export default function ClientRoute() {
    const { avatar, name, nationality, title, quote } = useLoaderData();
    return (
        <div className="client-details">
            <img alt={name} className="client-image" src={avatar} />
            <div className="client-summary">
                { quote ? <blockquote className="client-quote">{quote}</blockquote> : null }
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