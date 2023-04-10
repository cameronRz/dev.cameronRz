import { v4 as uuid } from 'uuid';
import '../assets/scss/project.scss';
import Icon from './Icon';
import { usePreviewControls } from '../hooks/usePreviewControls';

const Project = ({ project }) => {
  const { showPreview } = usePreviewControls();

  const showProjectPreview = () => {
    showPreview(project);
  };

  return (
    <div className="project" onClick={showProjectPreview}>
      <h3>{project.name}</h3>

      <p className="project__description">{project.headline}</p>

      {project.stack && (
        <ul className="project__stack">
          {project.stack.map((item) => (
            <li key={uuid()} className="project__stack-item">
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label="source code"
          className="link link--icon"
          target="_blank"
        >
          <Icon name="github" />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label="live preview"
          className="link link--icon"
          target="_blank"
        >
          <Icon name="launch" size="lg" />
        </a>
      )}
    </div>
  );
};

export default Project;
