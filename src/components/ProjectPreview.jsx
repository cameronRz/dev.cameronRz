import '../assets/scss/project-preview.scss';
import { usePreviewControls } from '../hooks/usePreviewControls';
import Icon from './Icon';

const ProjectPreview = () => {
  const { previewProject, hidePreview, previewVisible, previewImage } = usePreviewControls();

  if (!previewProject) return null;

  return (
    <div className={'project-preview' + (previewVisible ? ' project-preview--visible' : '')}>
      <div className="project-preview__inner">
        <div className="project-preview__content">
          <button className="project-preview__close" onClick={hidePreview}>
            <Icon name="close" />
          </button>

          {previewImage && <img src={previewImage} alt="Preview image" className="project-preview__image" />}
          <p className="project-preview__image-description">{previewProject.previewImageDescription}</p>

          <p className="project-preview__description">
            {previewProject.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
