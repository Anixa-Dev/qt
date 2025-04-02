import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  steps: null,
  initialSteps: [],
  filteredStepIds: [],
}

const {
  actions: {
    storeFormSteps, removeStep, addStep, resetFormSteps,
  },
  reducer,
} = createSlice({
  name: 'filterFormSteps',
  initialState,
  reducers: {
    storeFormSteps: (state, action) => ({
      ...state,
      initialSteps: action.payload,
      steps: action.payload,
    }),
    removeStep: (state, action) => {
      const newFilteredSteps = Array.from(new Set(state.filteredStepIds).add(action.payload.stepId))
      return ({
        ...state,
        filteredStepIds: newFilteredSteps,
        steps: state.initialSteps.filter((step) => !newFilteredSteps.includes(step.id)),
      })
    },
    addStep: (state, action) => {
      const newFilteredSteps = state.filteredStepIds.filter((id) => id !== action.payload.stepId)
      return ({
        ...state,
        filteredStepIds: newFilteredSteps,
        steps: state.initialSteps.filter((step) => !newFilteredSteps.includes(step.id)),
      })
    },
    resetFormSteps: () => initialState,
  },
})

export default reducer
export {
  storeFormSteps, removeStep, addStep, resetFormSteps,
}
