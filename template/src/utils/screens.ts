export const NAVIGATOR_BOTTOM_TAB = "Bottom Tab" as const;
export const NAVIGATOR_LANDING = "Landing Stack" as const;
export const NAVIGATOR_SIGNED_IN_STACK = "Signed In Stack" as const;
export const NAVIGATOR_SIGNED_OUT_STACK = "Signed Out Stack" as const;
export const NAVIGATOR_HOME_STACK = "Home" as const;
export const NAVIGATOR_MODAL_STACK = "Modal" as const;
export const NAVIGATOR_DRAWER_STACK = "Drawer" as const;

export const HOME_SCREENS = {
	MAIN_SCREEN: "Main",
	PROFILE_SCREEN: "Profile",
} as const;

export const SIGNED_OUT_SCREENS = {
	SIGN_IN_SCREEN: "Sign In",
	SIGN_UP_SCREEN: "Sign Up",
	FORGOT_PASSWORD_SCREEN: "Forgot Password",
} as const;

export const MODAL_SCREENS = {
	PERMISSION_SCREEN: "Permission",
	PERMISSION_DENIED_SCREEN: "Permission Denied",
} as const;
