import { describe, expect, it } from "vitest";
import { loader } from "~/routes/index";
import { loader as clientLoader } from "~/routes/client/$id";

const baseUrl = "https://localhost:3000/";

describe("Index Loader", () => {
    it("should return a response", async () => {
        const response = await loader({
            request: new Request(baseUrl),
        });

        expect(response).toBeInstanceOf(Response);

        // can check the response here.
        // would be helpful to mock api
        const results = await response.json();
        expect(results).toHaveLength(5);
    });

    it("should query when the URL has a search term", async () => {
        const response = await loader({
            request: new Request(`${baseUrl}?q=foo`),
        });
        const results = await response.json();
        expect(results).toHaveLength(0);
    });
});

describe("Client loader", () => {
    it("should find a specific client", async () => {
        const response = await clientLoader({
            request: new Request(baseUrl),
            params: {
                id: "ed-joycetm",
            },
        });
        const results = await response.json();
        expect(results.title).toBe("Chief Technical Officer");
    });
});
