/* eslint-disable no-unused-expressions */
import { Button, HtmlText, Stack, Title } from '@bubbles-ui/components';
import { ChevronRightIcon } from '@bubbles-ui/icons/outline';
import { LeebraryImage } from '@leebrary/components';
import PropTypes from 'prop-types';
import React from 'react';
import WelcomeCardStyles from './WelcomeCard.styles';

const WelcomeCard = ({ feedback, t, onNext, canStart }) => {
  const { classes } = WelcomeCardStyles({}, { name: 'WelcomeCard' });

  const handleOnNext = () => {
    onNext();
  };

  return (
    <Stack className={classes.root} direction="column" spacing={4}>
      <Title order={3}>{t('feedbackIntroductoryText')}</Title>
      <HtmlText>{feedback.introductoryText}</HtmlText>

      {feedback.featuredImage ? (
        <LeebraryImage src={window.getUrl(feedback.featuredImage.id)} />
      ) : null}
      {canStart ? (
        <Stack fullWidth justifyContent="flex-end">
          <Button compact rounded rightIcon={<ChevronRightIcon />} onClick={handleOnNext}>
            {t('startQuestions')}
          </Button>
        </Stack>
      ) : null}
    </Stack>
  );
};

WelcomeCard.propTypes = {
  feedback: PropTypes.object,
  t: PropTypes.func,
  onNext: PropTypes.func,
  canStart: PropTypes.bool,
};

WelcomeCard.defaultProps = {
  onNext: () => {},
};

export default WelcomeCard;
