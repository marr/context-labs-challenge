import { useLoaderData } from '@remix-run/react';
import { getClients } from '~/api/client.server';
import Client from '~/components/Client';

export const loader = async () => {
    return await getClients();
}

export default function Index() {
    const data = useLoaderData();
    return (
        <main>
            <div className="clients">
                {data.map((client, index) => {
                    return <Client key={`client-${index}`} id={index} {...client} />
                })}
            </div>
            <p className="clients-summary">{data.length} clients</p>
        </main>
    );
}
