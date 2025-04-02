/* eslint-disable prefer-destructuring */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

export const findStepIndex = ({ steps, stepId }) => {
  const stepDetail = steps.find((step) => step.id === stepId);
  if (stepDetail) {
    return steps.indexOf(stepDetail);
  }
  return -1;
};

export const getStepId = ({ steps, activeStepId, jump }) => {
  let resultId = '';
  const stepIndex = findStepIndex({ steps, stepId: activeStepId });

  const newStepIndex = stepIndex + jump;
  if (newStepIndex >= 0 && newStepIndex < steps.length) {
    resultId = steps[newStepIndex].id;
  }

  return resultId;
};

export const isLastStepFunc = ({ activeStep, steps }) => activeStep === steps.slice(-1)[0]?.id;

export const isFirstStepFunc = ({ activeStep, steps }) => activeStep === steps[0]?.id;

export const getInitialStep = ({ steps }) => steps[0]?.id;

export const getFormUtils = ({ steps, activeStep, setActiveStep }) => {
  const initialStep = getInitialStep({ steps });
  const activeStepIndex = findStepIndex({ stepId: activeStep, steps });

  const isLastStep = isLastStepFunc({ steps, activeStep });
  const isFirstStep = isFirstStepFunc({ steps, activeStep });

  const setStepByJump = (jump) => {
    setActiveStep(getStepId({ steps, activeStepId: activeStep, jump }));
  };

  const goBack = () => {
    if (!isFirstStep) {
      setStepByJump(-1);
    }
  };

  const goNext = () => {
    if (!isLastStep) {
      setStepByJump(1);
    }
  };

  const goLast = async (submit) => {
    const remainingSteps = steps.length - activeStepIndex - 1;
    // eslint-disable-next-line no-unused-vars
    for (const _ of Array(remainingSteps)) {
      const nextCondition = activeStepIndex + remainingSteps < steps.length && remainingSteps > 0;
      if (nextCondition) {
        await submit();
      }
    }
  };

  return {
    initialStep,
    activeStepIndex,
    isLastStep,
    isFirstStep,
    goBack,
    goNext,
    goLast,
  };
};

export const validateFormFields = async ({
  formFields,
  actions,
  values,
  asyncRun = true,
  formType,
}) => {
  let isValid = true;
  const promises = [];
  for (const fieldKey of Object.keys(formFields)) {
    const field = formFields[fieldKey];

    if (field.validate) {
      promises.push({
        field: field.name,
        promise: () => field.validate({ values, key: field.name, formType }),
      });

      if (!asyncRun) {
        const validateResult = await field.validate({
          values,
          key: [field.name],
          formType,
        });

        if (validateResult.error) {
          isValid = false;
          actions.setFieldError(field.name, validateResult.errMsg);
        }
      }
    }
  }

  if (asyncRun) {
    const promisesResult = await Promise.all(promises.map((p) => p.promise()));
    promisesResult.forEach((promiseResult, idx) => {
      if (promiseResult.error) {
        isValid = false;
        actions.setFieldError(promises[idx].field, promiseResult.errMsg);
      }
    });
  }

  return isValid;
};

export const getFormItems = ({
  components, layout,
}) => {
  let leftItem;
  let rightItem;
  let fullItem;
  if (components?.length > 0) {
    switch (layout) {
      case 'full': {
        fullItem = components[0];
        break;
      }
      case 'left': {
        leftItem = components[0];
        if (components.length > 1) {
          rightItem = components[1];
        }
        break;
      }
      case 'right': {
        rightItem = components[0];
        if (components.length > 1) {
          leftItem = components[1];
        }
        break;
      }
      default: {
        break;
      }
    }
  }

  return { leftItem, rightItem, fullItem };
};

export const isFormItemVisible = ({ values, itemId }) => {
  const toHideLayoutsListExist = values && values.hide_layouts && values.hide_layouts.length > 0;
  if (toHideLayoutsListExist) {
    const toHideLayoutsList = values.hide_layouts;
    return !toHideLayoutsList.includes(itemId);
  }
  return true;
}; 