import React, { useContext } from "react"
import { Provider } from "react-redux"
import "react-native-gesture-handler"
import { createStackNavigator } from "@react-navigation/stack"
import {
  configureStore,
  createReducer,
  combineReducers
} from "@reduxjs/toolkit"
import { screens } from "@screens"
import { modules, reducers, hooks, initialRoute } from "@modules"
import { connectors, slices } from "@store"
import { RootSiblingParent } from "react-native-root-siblings"
import { PersistGate } from "redux-persist/integration/react"
import { GlobalOptionsContext } from "@options"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { screenName } from "./utils/Define"
import { myLog } from "./utils/helper"
import { getNavigation } from "./screens/stackNavigator/StackNavitor"
import axios from "axios"
import { globalOptions } from "./options/options"

// set to axios base url
axios.defaults.withCredentials = false
axios.defaults.baseURL = "https://silent-moon-34565.botics.co"

const Stack = createStackNavigator()
const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
  whitelist: ["auth"]
}

const getStore = globalState => {
  const appReducer = createReducer(globalState, _ => globalState)
  const reducersT = slices.reduce((acc, slice) => {
    acc[slice.name] = slice.reducer
    return acc
  }, {})
  // console.log("getStore=>", reducersT)
  const reducer = combineReducers({
    app: appReducer,
    ...reducers,
    ...connectors,
    ...reducersT
  })

  const persistedReducer = persistReducer(persistConfig, reducer)

  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      })
  })
}

const App = () => {
  const global = useContext(GlobalOptionsContext)
  const Navigation = getNavigation(modules, screens, screenName.splash)
  const store = getStore(global)

  let effects = {}
  hooks.map(hook => {
    effects[hook.name] = hook.value()
  })

  const persistor = persistStore(store)
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </RootSiblingParent>
  )
}

export default App
