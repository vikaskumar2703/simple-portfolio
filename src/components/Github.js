import axios from "axios";
import { useState, useEffect } from "react";
import Githublogo from "../assets/images/icons8-github (1).svg";
import { IoIosPeople } from "react-icons/io";
import { RiGitRepositoryFill } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";

const Github = () => {
  const [followers, setFollowers] = useState(null);
  const [repoCount, setRepoCount] = useState(null);
  const [repos, setRepos] = useState(null);
  const myGithub = "https://github.com/vikaskumar2703";
  const baseURL = "https://api.github.com/users/vikaskumar2703";
  useEffect(() => {
    const urls = [baseURL, "https://api.github.com/users/vikaskumar2703/repos"];
    Promise.all(urls.map((url) => axios.get(url)))
      .then((responses) => {
        // Handle the responses here
        setFollowers(responses[0].data.followers);
        setRepoCount(responses[0].data.public_repos);
        setRepos(responses[1].data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="bg-gradient-to-r from-cyan-600 to-cyan-950 pt-4">
      <h1 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
        Github Repos
      </h1>
      <h1 className="flex justify-center">
        <img className="" src={Githublogo}></img>
        <a href={myGithub} className="text-2xl font-bold p-2">
          vikaskumar2703
        </a>
      </h1>
      <h1 className="text-2xl font-bold p-2 flex justify-center  ">
        <IoIosPeople className="mx-2 scale-150 m-1" />
        followers {followers}
      </h1>
      <h1 className="text-2xl font-bold p-2 flex justify-center">
        <RiGitRepositoryFill className="mx-2 scale-150 m-1" />
        Repos {repoCount}
      </h1>

      <div className="flex flex-wrap justify-center items-center">
        {repos
          ? repos.map((repo) => {
              return (
                <div
                  id={repo.id}
                  className="repo-card rounded-md border-4 w-96 h-52 m-3 flex  flex-col items-start justify-between p-2 overflow-hidden bg-gradient-to-r from-slate-500 to-slate-700"
                >
                  <h1 className="text-2xl font-bold p-2 hover:text-white">
                    <a href={repo.html_url}>{repo.name}</a>
                  </h1>
                  <p className="text-left">Description : {repo.description}</p>
                  <h1 className="flex items-center mx-4 text-4xl">
                    <AiOutlineStar />
                    {repo.stargazers_count}
                  </h1>
                </div>
              );
            })
          : " "}
      </div>
    </div>
  );
};

export default Github;
