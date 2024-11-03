# ReduxReact Explained

**Redux** State Management explained using a simple Customer `add` and `remove` dashboard.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/patricnilackshan/ReduxExplained_CustomerDashboard.git
   cd ReduxExplained_CustomerDashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the project:

   ```bash
   npm run dev
   ```

## Redux Workflow Overview

1. Store:

   The central place where the entire application state is stored. It holds the current state and allows access to it.

2. Actions:

   Plain JavaScript objects that represent a change or event in the application. Each action must have a `type` property and can have additional data (payload). Actions are dispatched to signal that something happened.

3. Reducers:

   Pure functions that take the current state and an action as arguments and return a new state. They determine how the state changes in response to actions. Redux requires that reducers are pure, meaning they do not have side effects and do not mutate the existing state.

4. Dispatch:

   The process of sending an action to the store. When an action is dispatched, Redux invokes the appropriate reducer, which computes the new state based on the action.

5. Selectors:

   Functions that extract specific pieces of data from the state. Selectors help in accessing state data efficiently, making it easier to reuse and maintain.

6. View Components:

   UI components that are connected to the Redux store. They use hooks like `useSelector` to read data from the store and `useDispatch` to send actions.

## Workflow Steps

1. **User Interaction**: A user interacts with the UI (e.g., clicks a button).
2. **Dispatch Action**: An action is dispatched (e.g., `addCustomer`).
3. **Reducer Processes Action**: The reducer processes the action and updates the state.
4. **New State**: The store updates with the new state.
5. **Re-render**: Components that rely on that piece of state re-render to reflect the updated data.

## Benefits of Redux

- Centralized state management, making state predictable.
- Easy debugging with tools like Redux DevTools.
- Enhanced performance for large applications due to efficient state updates.

```

```

```

```
