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
            id: 'coding',
            text: '코딩하기',
            isEnd: false,
        },{
            id: 'morning',
            text: '아침',
            isEnd: true,
        },{
            id: 'afternoon',
            text: '점심',
            isEnd: false,
        },{
            id: 'evening',
            text: '저녁',
            isEnd: false,
        },{
            id: 'exercise',
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
            num: 12345,
            title: '게시판 이용 수칙',
            createDate: new Date(2023,11,25,4,40,11),
            creator: '관리자',
            view:15,
            good: 0,
        },
        {
            num: 4558332,
            title: '공지사항',
            createDate: new Date(2023,11,25,4,38,12),
            creator: '관리자',
            view:15,
            good: 0,
        },
        {
            num: 2147483647,
            title: '안녕하세요',
            createDate: new Date(2023,11,25,4,35,0),
            creator: '관리자',
            view:15,
            good: 0,
        },
    ]
})
