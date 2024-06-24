import {createCookieSessionStorage} from "@remix-run/node";

const {getSession: getUserPreferencesCookie, commitSession: commitUserPreferencesCookie, destroySession: destroyUserPreferencesCookie} = createCookieSessionStorage({
    cookie: {
        name: "__user_preferences",
        // domain: process.env.COOKIE_DOMAIN,
        httpOnly: true,
        maxAge: parseInt(process.env.COOKIE_MAX_AGE),
        path: "/",
        sameSite: "strict",
        secrets: [process.env.SESSION_SECRET],
        secure: true,
    },
});

export {getUserPreferencesCookie, commitUserPreferencesCookie, destroyUserPreferencesCookie};
