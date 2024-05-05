# Trip Trove Backend Application

Documentation.

Trip Trove basically a online tourism management website. that can provide country wise tour in beautiful location.

Functional Requirements:

---

Model

### Posts

- user can create new post
- user can read all post
- user can see all post added only his/her.
- user can delete single post provide unique id
- user can update single post provide udpated new data with unique id

### API ENDPOINTS:

---

## base_url = https://convo-server-side-api.vercel.app/api/v1

---

#### Posts

      GET /posts
      GET /posts/my-posts [secure with jwt]
      GET /posts/token [generate token when client-side user login]
      POST /posts/create-post
      PATCH /posts/[id]
      DELETE /posts/[id]


---

Tech Uses 🔥;

- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) : As based programming language.
- [NodeJS](https://nodejs.org/en): That allows to run javascript code in server
- [Express](https://expressjs.com/): A nodeJS minimalist web framework building server-side application
- [Mongoose](https://mongoosejs.com/): That help us to model or collection field schema validation in server-side to store data in mongodb
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): That help us to secure private resource data cannot access data without access token

### follow me [ramim-ahmed](https://ramim-ahmed.vercel.app)
