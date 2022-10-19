import { Avatar, Description, Label, Location, Quantity, StatList, Stats, Tag, Username, Wrapper } from "./user-styled"

export const Profile = ({username, tag, location, avatar,stats}) => {
    return <Wrapper>
  <Description>
    <Avatar
      src={ avatar}
      alt="User avatar"
      
    />
    <Username>{ username}</Username>
            <Tag> { tag}</Tag>
            <Location> { location}</Location>
  </Description>

  <Stats>
    <StatList>
      <Label >Followers: </Label>
                <Quantity >{ stats.followers}</Quantity>
    </StatList>
    <StatList>
      <Label >Views: </Label>
      <Quantity >{ stats.views}</Quantity>
    </StatList>
    <StatList>
      <Label >Likes: </Label>
      <Quantity >{ stats.likes}</Quantity>
    </StatList>
  </Stats>
</Wrapper>
}