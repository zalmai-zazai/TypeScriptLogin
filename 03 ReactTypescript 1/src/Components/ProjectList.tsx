import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { PostProps } from '../types/types';

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<PostProps[]>([]); // Strongly typed state for project data
  const [loading, setLoading] = useState<boolean>(true); // Loading state with type

  // useEffect to handle async data fetching
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          'http://jsonplaceholder.typicode.com/posts'
        ); // Replace with your API
        const data: PostProps[] = await response.json(); // Ensure correct typing of data
        setProjects(data); // Set the fetched projects to state
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    fetchProjects(); // Call the async function to fetch data
  }, []); // Empty dependency array means this runs only once on mount

  // If still loading, display a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render the list of projects once the data is loaded
  return (
    <div className="projectList">
      <h1>Project List</h1>
      <ul>
        {projects.map((post, index) => (
          <ProjectCard
            index={index}
            key={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
