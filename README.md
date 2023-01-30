# canonical-blog

This project is a simple clone of Canonicals blog.
It has a header dropdown to filter content types. It also has pagination in the footer to paginate the content contained in the json file.

Here is a test json with sample blog posts
https://incomingstocks.fra1.digitaloceanspaces.com/fake2.json

This project uses the Canonical css framework called 'vanilla'

This project uses vite.js, this is a better version of create-react-app imo for a couple of reasons but mainly because it's faster ⚡

1. Install the packages via:
   yarn install

2. Run the project:
   yarn dev

3. Build the project:
   yarn build

Future changes:

-   use proper pagination with the correct api to traverse through content via params.
-   use nextjs(v13+)
-   add logging system
