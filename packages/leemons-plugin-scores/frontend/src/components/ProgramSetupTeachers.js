import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { ChevLeftIcon, ChevRightIcon } from '@bubbles-ui/icons/outline';
import {
  Box,
  Button,
  ContextContainer,
  InputWrapper,
  NumberInput,
  Select,
  Stack,
  Switch,
} from '@bubbles-ui/components';

export default function ProgramSetupTeachers({
  onNext,
  onPrevious,
  sharedData,
  setSharedData,
  labels,
}) {
  const defaultValues = {
    teacherCanAddCustomAvgNote: false,
    teacherReminderPeriod: null,
    teacherReminderNumberOfPeriods: 1,
    ...sharedData,
  };

  const {
    reset,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const teacherReminderPeriod = watch('teacherReminderPeriod');
  const max = {
    days: 365,
    weeks: 52,
    months: 24,
  };

  React.useEffect(() => {
    reset(defaultValues);
  }, [JSON.stringify(sharedData)]);

  const handleOnNext = (e) => {
    setSharedData(e);
    onNext(e);
  };

  const periods = React.useMemo(
    () => [
      { label: labels.periods.days, value: 'days' },
      { label: labels.periods.weeks, value: 'weeks' },
      { label: labels.periods.months, value: 'months' },
    ],
    [labels]
  );

  return (
    <form onSubmit={handleSubmit(handleOnNext)}>
      <ContextContainer padded="vertical">
        <Box>
          <Controller
            control={control}
            name="teacherCanAddCustomAvgNote"
            render={({ field }) => (
              <InputWrapper label={labels.title} description={labels.description}>
                <Switch {...field} label={labels.avgNoteLabel} />
              </InputWrapper>
            )}
          />
        </Box>
        <Box>
          <InputWrapper description={labels.reminderDescription} help={labels.reminderNote}>
            <ContextContainer direction="row">
              <Box>
                <Controller
                  control={control}
                  name="teacherReminderPeriod"
                  render={({ field }) => (
                    <Select
                      {...field}
                      data={periods}
                      disabled={!!defaultValues.id}
                      placeholder={labels.selectPeriodLabel}
                    />
                  )}
                />
              </Box>
              <Box>
                <Controller
                  control={control}
                  name="teacherReminderNumberOfPeriods"
                  render={({ field }) => (
                    <NumberInput
                      {...field}
                      disabled={!!defaultValues.id}
                      min={1}
                      max={max[teacherReminderPeriod] || 365}
                    />
                  )}
                />
              </Box>
            </ContextContainer>
          </InputWrapper>
        </Box>
        <Stack fullWidth justifyContent="space-between">
          <Box>
            <Button
              compact
              variant="light"
              leftIcon={<ChevLeftIcon height={20} width={20} />}
              onClick={onPrevious}
            >
              {labels.prev}
            </Button>
          </Box>
          <Box>
            <Button type="submit" rightIcon={<ChevRightIcon height={20} width={20} />}>
              {labels.next}
            </Button>
          </Box>
        </Stack>
      </ContextContainer>
    </form>
  );
}

ProgramSetupTeachers.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  sharedData: PropTypes.object.isRequired,
  setSharedData: PropTypes.func.isRequired,
  labels: PropTypes.object.isRequired,
};

ProgramSetupTeachers.defaultProps = {
  setSharedData: () => {},
  onNext: () => {},
  onPrevious: () => {},
};
