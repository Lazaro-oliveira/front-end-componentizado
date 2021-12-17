import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () => {
    const { githubState } = useContext(
        GithubContext
    );
    console.log("bbbbbbbbbbbbbbbbbbb");
    console.log({githubState});

    return { githubState };
};

export default useGithub;

