import { useEffect, useState } from "react";

function GithubProjectsCount() {
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Aakash2084/repos?per_page=100"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub repositories");
        }

        const repos = await response.json();

        const count = repos.filter((repo) => !repo.fork).length;

        setProjectCount(count);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  return projectCount;
}

export default GithubProjectsCount;