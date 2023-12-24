import { useNavigate } from "react-router-dom";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist();

export const nameState = atom({
    key: 'nameState',
    default: '',
    effects_UNSTABLE: [persistAtom],
})

export const listState = atom({
    key: 'listState',
    default: [
        {
            text: '코딩하기',
            isEnd: false,
        },{
            text: '아침',
            isEnd: false,
        },{
            text: '점심',
            isEnd: false,
        },{
            text: '저녁',
            isEnd: false,
        },{
            text: '운동하기',
            isEnd: false,
        }
    ],
    effects_UNSTABLE: [persistAtom],
})

export const boardState = atom({
    key: 'boardState',
    default: [
        {
            num: 0,
            title: '게시판 이용 수칙',
            createDate: Date.now(),
            creator: '관리자',
            view:15,
            good: 0,
        }
    ]
})
