import type { AppDispatch, RootState } from "$states/store"

import { useDispatch as dispatch, TypedUseSelectorHook } from "react-redux"
import { useSelector as selector } from "react-redux"

export const useDispatch = () => dispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = selector
