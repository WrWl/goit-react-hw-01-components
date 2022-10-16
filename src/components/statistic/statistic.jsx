export const Statistic = ({ title, stats }) => {
    return <section class="statistics">
      {title && (
         <h2 class="title">Upload stats</h2>
       ) }

      <ul class="stat-list">
        {stats.map(each => (
          
          <li key={each.id}class="item">
          <span class="label">{each.label}</span>
          <span class="percentage">{each.percentage}</span>
          </li>
        ))}
    
    
  </ul>
</section>
}