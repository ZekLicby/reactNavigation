type TNavigators = "NativeStack" | "Stack";

type TScreens = "Hub" | "Login" | "Home" | "Screen1" | "Screen2";

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends Record<TScreens, undefined>, Record<TNavigators, undefined> {}
  }
}
