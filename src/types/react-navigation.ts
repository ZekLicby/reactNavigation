type TNavigators =
  | "NativeStack"
  | "Stack"
  | "BottomTabs"
  | "NativeBottomTabs"
  | "Drawer"
  | "MaterialTopTabs";

type TScreens =
  | "Hub"
  | "Login"
  | "Home"
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
