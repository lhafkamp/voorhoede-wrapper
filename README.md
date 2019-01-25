# De Voorhoede wrapper
A GraphQL wrapper that converts the REST API from De Voorhoede.

## Tools and packages
-  [x] [graphql-yoga](https://github.com/prisma/graphql-yoga)
-  [x] [dotenv](https://www.npmjs.com/package/dotenv)
-  [x] [prettier](https://github.com/prettier/prettier)

## Build
Clone the repository:

```
git clone https://github.com/lhafkamp/voorhoede-wrapper.git
```

Install dependencies:
```
npm install
```

Add a file named `variables.env` to the root of your project.
Add an environment variable with the name VH_ENDPOINT that points to the REST API from De Voorhoede.

The content of `variables.env` should look like this:

```
VH_ENDPOINT=https://nameofapi.now.sh/api/v1
```

Run the server:
```
node server.js
```

## License
[MIT licensed](https://github.com/voorhoede/voorhoede-colibri-api/blob/master/license) © [De Voorhoede](https://twitter.com/devoorhoede)
