# Context Labs

This take home assignment was used to demonstrate loading, searching, and linking to data. The included _clients.json_ file is an example
data store. Setting up a real database would be a good next step.

I chose [Remix](https://remix.run) as my starting environment for the following reasons:

1. It's a great way to build server rendered React apps. Support for other frameworks are coming soon (Vue, Svelte, etc.)
2. Pages render very fast using Remix. You will notice I use prefetch="intent" to preload the data for the client pages. This achieves instant loads for the client routes.
3. Searching is all handled through the querystring, allowing for bookmarking and sharing of searches easily.
4. Best of all, you can disable JavaScript and this app still works! Just use the enter key when searching if you have JS disabled.

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
