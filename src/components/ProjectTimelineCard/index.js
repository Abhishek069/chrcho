import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectCardContainer,
  ProjectImage,
  ProjectTitleAndDurationContainer,
  ProjectTitle,
  DurationContainer,
  Duration,
  ProjectDescription,
  VisitLink,
} from './newComponets'

const ProjectTimeLineCard = props => {
  const DetailsOfProject = props
  const {
    projectTitle,
    description,
    duration,
    projectUrl,
    imageUrl,
  } = DetailsOfProject

  return (
    <>
      <ProjectCardContainer>
        <ProjectImage src={imageUrl} alt="project" />
        <ProjectTitleAndDurationContainer>
          <ProjectTitle>{projectTitle}</ProjectTitle>
          <DurationContainer>
            <AiFillCalendar color="!171f46" />
            <Duration>{duration}</Duration>
          </DurationContainer>
        </ProjectTitleAndDurationContainer>
        <ProjectDescription>{description}</ProjectDescription>
        <VisitLink href={projectUrl}>Visit</VisitLink>
      </ProjectCardContainer>
    </>
  )
}

export default ProjectTimeLineCard
