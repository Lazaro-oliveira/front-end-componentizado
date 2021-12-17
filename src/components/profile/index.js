import React from 'react';
import useGithub from "../../hooks/github-hooks";
import * as S from './styled';

const Profile = () => {

    const { githubState } = useGithub();

    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    console.log({githubState});
    return (
        <S.Wrapper>
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/2?v=4" alt="Avatar of user" />
            <S.WrapperInfoUsers>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUsername>
                        <h3>Username: </h3>
                        <a
                            href='https://github.com/benits'
                            target="_blank"
                            rel='noreferrer'
                        >
                            benits
                        </a>
                    </S.WrapperUsername>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Starreds</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>5</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUsers>
        </S.Wrapper>
    )
};

export default Profile;