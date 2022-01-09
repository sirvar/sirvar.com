import { useContext } from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import { ThemeContext } from 'styled-components';

export const GitHubChart: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <GitHubCalendar
      username="sirvar"
      color={theme.accent}
      hideColorLegend
      hideMonthLabels
      hideTotalCount
    >
      <ReactTooltip effect="solid" html />
    </GitHubCalendar>
  );
};
