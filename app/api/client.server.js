import slugify from '~/utils/slugify';
import clients from '../../data/clients.json';

// Assign ids to clients based of their names
for (const client of clients) {
    client.id = slugify(client.name);
}

// This could read directly from a database
export const getClients = async (query) => {
    if (query) {
        const regex = new RegExp(query, 'i');
        return clients.filter(client => {
            const fields = Object.values(client).filter(value => {
                return value && !value.startsWith('http');
            });
            const string = JSON.stringify(fields);
            return regex.test(string);
        });
    }
    return clients;
}

// Client ids are slugs of their names for now
export const getClient = async (clientId) => {
    return clients.find(({ name }) => clientId === slugify(name));
}