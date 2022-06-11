import PropTypes from 'prop-types';
import { getRandomColor } from './RandomColor'
import { Section, Title, StatisticsList, StatisticsItem, Label } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <Section>
            {title && <Title>{ title }</Title>}

            <StatisticsList>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <StatisticsItem key={id} style={{ backgroundColor: getRandomColor() }}>
                            <Label>{label}</Label>
                            <Label>{percentage}%</Label>
                        </StatisticsItem>
                    )
                })}
            </StatisticsList>
        </Section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
}