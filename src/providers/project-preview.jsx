import { createContext, useState } from 'react';
const images = import.meta.glob('../assets/images/preview/*');

const ProjectPreviewContext = createContext({});

const ProjectPreviewProvider = ({ children }) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [previewProject, setPreviewProject] = useState(null);

  const showPreview = (project) => {
    const fetchImage = images[`../assets/images/preview/${project.previewImage}`];

    if (fetchImage) {
      fetchImage()
        .then(image => {
          setPreviewProject(project);
          setPreviewImage(image.default);
          setPreviewVisible(true);
        });
    } else {
      setPreviewProject(project);
      setPreviewVisible(true);
    }
  };

  const hidePreview = () => {
    setPreviewProject(null);
    setPreviewImage(null);
    setPreviewVisible(false);
  };

  return (
    <ProjectPreviewContext.Provider value={{ previewProject, previewVisible, previewImage, showPreview, hidePreview }}>
      {children}
    </ProjectPreviewContext.Provider>
  );
};

export { ProjectPreviewProvider, ProjectPreviewContext };
