import { atom } from "recoil";

export const nameState = atom({
    key: 'nameState',
    default: '',
})

export const listState = atom({
    key: 'listState',
    default: [],
})