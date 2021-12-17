import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const GithubContext = createContext({
    user: {},
    repositories: [],
    starred: [],
});


const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        user: {
            id: undefined,
            avatar: undefined,
            login: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0,
        },
        repositories: [],
        starred: [],
    });

    const contextValue = {
        githubState
    };

    return (
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    );
};
console.log("ccccccccccccccccccccccccc");
console.log({ GithubContext });

export default GithubProvider;




