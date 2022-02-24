import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { ChevLeftIcon, ChevRightIcon } from '@bubbles-ui/icons/outline';
import { Box, Button, ContextContainer, InputWrapper, Stack } from '@bubbles-ui/components';
import SelectUserAgent from '@users/components/SelectUserAgent';
import { SelectProfile } from '@users/components/SelectProfile';

export default function ProgramSetupReviewers({
  onNext,
  onPrevious,
  sharedData,
  setSharedData,
  labels,
}) {
  const [profile, setProfile] = React.useState(null);

  const defaultValues = {
    reviewers: [],
    ...sharedData,
  };

  const {
    reset,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  React.useEffect(() => {
    reset(defaultValues);
  }, [JSON.stringify(sharedData)]);

  const handleOnNext = (e) => {
    setSharedData(e);
    onNext(e);
  };

  return (
    <form onSubmit={handleSubmit(handleOnNext)}>
      <ContextContainer padded="vertical">
        <Box>
          <InputWrapper label={labels.title} description={labels.description}>
            <ContextContainer direction="row">
              <SelectProfile firstSelected value={profile} onChange={setProfile} />
              <Controller
                control={control}
                name="reviewers"
                rules={{
                  required: labels.reviewersRequired,
                  min: { value: 1, message: labels.reviewersRequired },
                }}
                render={({ field: { value, onChange, ...field } }) => (
                  <SelectUserAgent
                    {...field}
                    profiles={[profile]}
                    value={value[0]}
                    onChange={(e) => (e ? onChange([e]) : onChange([]))}
                    error={errors.reviewers}
                  />
                )}
              />
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
              {labels.save}
            </Button>
          </Box>
        </Stack>
      </ContextContainer>
    </form>
  );
}

ProgramSetupReviewers.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  sharedData: PropTypes.object.isRequired,
  setSharedData: PropTypes.func.isRequired,
  labels: PropTypes.object.isRequired,
};

ProgramSetupReviewers.defaultProps = {
  setSharedData: () => {},
  onNext: () => {},
  onPrevious: () => {},
};
