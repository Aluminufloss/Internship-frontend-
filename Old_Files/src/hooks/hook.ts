import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";

/**
 * 1) useDispatch теперь автоматически знает обо всех наших событиях и определять их тип
 * 2) useSelector даём знать, что у нас внутри, структура нашего приложения 
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;