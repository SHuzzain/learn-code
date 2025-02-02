export const LANGUAGE_TITLE = {
    "javaScript": "JavaScript",
    "nodeJs": "Node Js",
    "reactJs": "React Js",
    "postgreSql": "PostgreSQL",
    "restApi": "Rest API",
    "deployment": "Deployment"
}

export const NAV_COMPONENTS = [
    {
        title: LANGUAGE_TITLE.javaScript,
        description:
            "JavaScript is the most popular programming language used in the field of website development.",
    },
    {
        title: LANGUAGE_TITLE.nodeJs,
        description:
            "Node.js is a powerful, open-source, and cross-platform JavaScript runtime environment built on",
    },
    {
        title: LANGUAGE_TITLE.reactJs,
        description:
            "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
    },
    {
        title: LANGUAGE_TITLE.postgreSql,
        description:
            "The official site for PostgreSQL, the world's most advanced open source database.",
    },
    {
        title: LANGUAGE_TITLE.restApi,
        description:
            "REST API is a way of accessing web services in a simple and flexible way without having any processing.",
    },
    {
        title: LANGUAGE_TITLE.deployment,
        description:
            "Go to your app page on Heroku and choose “Resources”. Under add-ons, search for Heroku Postgres and add the mini plan to your app.",
    },
];



export const NAV_HREF = {
    [LANGUAGE_TITLE.javaScript]: "languages/javascript",
    [LANGUAGE_TITLE.nodeJs]: "languages/node-js",
    [LANGUAGE_TITLE.reactJs]: "languages/react-js",
    [LANGUAGE_TITLE.postgreSql]: "languages/postgre-sql",
    [LANGUAGE_TITLE.restApi]: "languages/rest-api",
    [LANGUAGE_TITLE.deployment]: "languages/deployment",
}