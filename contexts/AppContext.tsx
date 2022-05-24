import * as React from 'react'

type Action = { type: 'SET_SHOULD_CHANGE_COLOR' } | { type: 'RESET_COLOR' }
type Dispatch = (action: Action) => void
type State = { shouldChangeColor: boolean }
type AppProviderProps = { children: React.ReactNode }

const AppStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

function appReducer(state: State, action: Action) {
  switch (action.type) {
    case 'SET_SHOULD_CHANGE_COLOR':
      return { ...state, shouldChangeColor: true }

    case 'RESET_COLOR':
      return { ...state, shouldChangeColor: false }

    default:
      throw new Error(`Unhandled action type: ${action}`)
  }
}

function AppProvider({ children }: AppProviderProps): JSX.Element {
  const [state, dispatch] = React.useReducer(appReducer, {
    shouldChangeColor: false,
  })
  const value = { state, dispatch }
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  )
}

function useApp(): { state: State; dispatch: Dispatch } {
  const context = React.useContext(AppStateContext)
  if (context === undefined) {
    throw new Error('useApp must be used within a AppProvider')
  }
  return context
}

export { AppProvider, useApp }
