import { Label, Percentage, Stat, Statistics, StatItem, Title } from "./statistic-style"
import { getRandomColor } from './RandomColor.js'
export const Statistic = ({ title, stats }) => {
    return <Statistics>
      {title && (
         <Title>Upload stats</Title>
       ) }

      <Stat>
        {stats.map(each => (
          
          <StatItem key={each.id}   style={{backgroundColor:getRandomColor()}}>
          <Label >{each.label}</Label>
          <Percentage >{each.percentage}%</Percentage>
          </StatItem>
        ))}
    
    
  </Stat>
</Statistics>
}