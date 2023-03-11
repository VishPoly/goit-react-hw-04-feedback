import { Box } from '../box/Box';
import { ItemsText, TotalResults, Item } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, positiveFeedback, total }) => {
  return (
    <Box
      display="inline-flex"
      alignItems="start"
      flexDirection="column"
      width="100%"
      mb={5}
    >
      <Item>
        Good:
        <ItemsText>{good}</ItemsText>
      </Item>

      <Item>
        Neutral:
        <ItemsText>{neutral}</ItemsText>
      </Item>

      <Item>
        Bad:
        <ItemsText>{bad}</ItemsText>
      </Item>
      <TotalResults>Total: {total}</TotalResults>
      <TotalResults> Positive Feedback: {positiveFeedback}%</TotalResults>
    </Box>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
