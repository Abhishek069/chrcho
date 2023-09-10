import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimeLineCard from '../ProjectTimelineCard'

import {
  TimeLineContainer,
  ResponsiveContainer,
  HeaderContainer,
  Heading,
  CCBPHeading,
} from './newComponets'

const TimeLineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimeLineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }

  return (
    <TimeLineContainer>
      <ResponsiveContainer>
        <HeaderContainer>
          <Heading>
            MY JOURNEY OF <br />
            <CCBPHeading>CCBP 4.0</CCBPHeading>
          </Heading>
        </HeaderContainer>
        <Chrono
          theme={{secondary: 'white'}}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachItem => renderTimeLineCard(eachItem))}
        </Chrono>
      </ResponsiveContainer>
    </TimeLineContainer>
  )
}
export default TimeLineView
