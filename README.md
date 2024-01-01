This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Description
Using NextAuth I implemented authenticating users with their own credentials that they create and Github OAuth 2.0 with:
* NextAuth
* Prisma
* Postgresql

## Running Locally

After cloning the project, run:
```bash
npm install
```

Then create a .env file in the root directory with the following variables:

```env
DATABASE_URL= YOUR POSTGRES URl
NEXTAUTH_SECRET= YOUR NEXTAUTH SECRET
NEXTAUTH_URL= http://localhost:3000
GITHUB_CLIENT_ID= YOUR GITHUB CLIENT ID
GITHUB_CLIENT_SECRET= YOUR GITHUB CLIENT SECRET
```

Then run:
```bash
npx prisma db push
```

This will synchronize your database schema with the Prisma schema

Then run:
```bash
npm run dev 
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
