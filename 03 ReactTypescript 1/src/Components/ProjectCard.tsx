import { PostProps } from '../types/types';

const ProjectCard = ({ index, title, body }: PostProps) => {
  return (
    <div className="postCard">
      <h3>
        {index + 1}: {title}
      </h3>
      <p>{body}</p>
    </div>
  );
};

export default ProjectCard;
