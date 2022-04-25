import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { getClients } from '~/api/client.server';
import ClientPreview from '~/components/ClientPreview';
import EmptyClients from '~/components/EmptyClients';

export const loader = async ({ request }) => {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const clients = await getClients(query);
    return json(clients);
}

export default function Index() {
    const data = useLoaderData();

    if (data.length === 0) {
        return <EmptyClients />
    }

    return (
        <main>
            <div className="clients">
                {data.map(client => {
                    return <ClientPreview key={client.id} {...client} />
                })}
            </div>
            <p className="clients-summary">{data.length} client{data.length === 1 ? '' : 's'}</p>
        </main>
    );
}
