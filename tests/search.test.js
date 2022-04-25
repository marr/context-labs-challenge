import { describe, expect, it } from "vitest";
import { getClient, getClients } from "~/api/client.server";

describe("client.server", () => {
    it("gets clients", async () => {
        const clients = await getClients();
        expect (clients).toHaveLength(5);
    });
    it("searches clients using any field except url fields", async () => {
        let clients = await getClients('Brendon');
        expect(clients).toHaveLength(1);
        clients = await getClients('avataaar');
        expect(clients).toHaveLength(0);
    });
    it("gets client data from client id", async () => {
        let client = await getClient('alan-taylor');
        expect(client.quote).toBe('80% of the time it works every time');
        expect(client.name).toBe('Alan Taylor');
    });
});