type TNavigators = "NativeStack" | "Stack" | "BottomTab";

type TScreens =
  | "Hub"
  | "Login"
  | "Home"
  | "Screen1"
  | "Screen2"
  | "Favorites"
  | "Categories"
  | "Menu"
  | "LittleCar";

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends Record<TScreens, undefined>, Record<TNavigators, undefined> {}
  }
}
