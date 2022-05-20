import { RootState } from '../../app/store/store'

export const counterSelector = (state: RootState) => state.counter.count
