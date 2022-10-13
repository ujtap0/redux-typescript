import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../state";

// this has type information applied to it
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;