import { useContext } from 'react';
import { ProjectPreviewContext } from '../providers/project-preview';

export const usePreviewControls = () => useContext(ProjectPreviewContext);
