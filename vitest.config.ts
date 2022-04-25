import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        setupFiles: ["./app/setupTests.js"],
    },
    resolve: {
        alias: {
            "~": resolve("./app"),
        },
    },
});
