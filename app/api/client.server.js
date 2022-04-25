import clients from '../../data/clients.json';

// This could read directly from a database
export const getClients = async () => {
    return clients;
}

// Use index as ids for now
export const getClient = async (clientId) => {
    return clients[clientId];
}