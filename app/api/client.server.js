import slugify from '~/utils/slugify';
import clients from '../../data/clients.json';

for (const client of clients) {
    client.id = slugify(client.name);
}

// This could read directly from a database
export const getClients = async (query) => {
    if (query) {
        const regex = new RegExp(query, 'i');
        return clients.filter(client => {
            const string = JSON.stringify(Object.values(client));
            return regex.test(string);
        });
    }
    return clients;
}

// Use index as ids for now
export const getClient = async (clientId) => {
    return clients.find(({ name }) => clientId === slugify(name));
}