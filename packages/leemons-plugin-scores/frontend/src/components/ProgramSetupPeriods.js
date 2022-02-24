import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { ChevRightIcon } from '@bubbles-ui/icons/outline';
import { Alert, Box, Button, ContextContainer, RadioGroup, Stack } from '@bubbles-ui/components';

export default function ProgramSetupPeriods({
  onNext,
  sharedData,
  setSharedData,
  labels,
  frequencyLabels,
  program,
  programCalendar,
}) {
  const defaultValues = {
    period: false,
    periodFinal: null,
    ...sharedData,
  };

  const {
    reset,
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const period = watch('period');

  React.useEffect(() => {
    const subscription = watch((formData, { name }) => {
      if (name === 'period') {
        setValue('periodFinal', null);
      }
    });
    return () => subscription.unsubscribe();
  });

  React.useEffect(() => {
    reset(defaultValues);
  }, [JSON.stringify(sharedData)]);

  const handleOnNext = (e) => {
    setSharedData(e);
    onNext(e);
  };
  const datas = React.useMemo(() => {
    const response = {
      showCalendarAlert: false,
      periods: [{ label: labels.periodProgramLabel, value: 'program' }],
      finalPeriods: [],
    };
    if (program) {
      if (program.maxNumberOfCourses > 0) {
        response.showCalendarAlert = !programCalendar.configured;
        response.periods.push({
          label: labels.periodCourseLabel.replace('{i}', program.maxNumberOfCourses),
          value: 'course',
          disabled: !programCalendar.configured,
        });
      }
      if (program.haveSubstagesPerCourse) {
        response.showCalendarAlert = !programCalendar.configured;
        response.periods.push({
          label: labels.periodSubstageLabel
            .replace('{i}', program.numberOfSubstages)
            .replace('{x}', frequencyLabels[program.substagesFrequency]),
          value: 'substage',
          disabled: true,
        });
      }
    }
    if (period && period !== 'custom') {
      response.finalPeriods.push({ label: labels.finalPeriodProgramLabel, value: 'program' });
      if (period === 'course' || period === 'substage') {
        response.finalPeriods.push({
          label: labels.finalPeriodCourseLabel,
          value: 'course',
        });
      }
      if (period === 'substage') {
        response.finalPeriods.push({
          label: labels.finalPeriodSubstage,
          value: 'substage',
        });
      }
    }
    response.periods.push({ label: labels.periodCustomLabel, value: 'custom' });
    return response;
  }, [program, period]);

  return (
    <form onSubmit={handleSubmit(handleOnNext)}>
      <ContextContainer padded="vertical">
        <Box>
          <Controller
            control={control}
            name="period"
            rules={{
              required: labels.periodsRequired,
              minLength: {
                value: 1,
                message: labels.periodsRequired,
              },
            }}
            render={({ field }) => (
              <RadioGroup
                {...field}
                label={labels.title}
                description={labels.description}
                direction="column"
                disabled={!!defaultValues.id}
                data={datas.periods}
                error={errors.period}
              />
            )}
          />
        </Box>
        {datas.showCalendarAlert ? (
          <Box>
            <Alert closeable={false}>
              {programCalendar.installed
                ? labels.calendarAlertNoConfigured
                : labels.calendarAlertNoInstalled}
            </Alert>
          </Box>
        ) : null}

        {datas.finalPeriods.length ? (
          <Box>
            <Controller
              control={control}
              name="periodFinal"
              shouldUnregister={true}
              rules={{
                required: labels.finalPeriodsRequired,
              }}
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  label={labels.finalPeriodTitle}
                  direction="column"
                  disabled={!!defaultValues.id}
                  data={datas.finalPeriods}
                  error={errors.periodFinal}
                />
              )}
            />
          </Box>
        ) : null}

        <Stack fullWidth justifyContent="end">
          <Button type="submit" rightIcon={<ChevRightIcon height={20} width={20} />}>
            {labels.next}
          </Button>
        </Stack>
      </ContextContainer>
    </form>
  );
}

ProgramSetupPeriods.propTypes = {
  onNext: PropTypes.func.isRequired,
  sharedData: PropTypes.object.isRequired,
  setSharedData: PropTypes.func.isRequired,
  labels: PropTypes.object.isRequired,
  program: PropTypes.object.isRequired,
  frequencyLabels: PropTypes.object.isRequired,
  programCalendar: PropTypes.shape({
    installed: PropTypes.bool,
    configured: PropTypes.bool,
  }),
};

ProgramSetupPeriods.defaultProps = {
  setSharedData: () => {},
  onNext: () => {},
};
