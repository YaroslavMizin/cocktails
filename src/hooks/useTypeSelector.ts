import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { rootStore } from '../store'

export const useTypedSelector: TypedUseSelectorHook<rootStore> = useSelector;