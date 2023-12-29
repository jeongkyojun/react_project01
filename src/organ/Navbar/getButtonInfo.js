export const getBtnInfos = (navigate) =>{
    const movePage = (pageAddr) =>{
        navigate(`/${pageAddr}`);
    }

    const btnInfos = [
        {
            src: './start',
            alt: 'startPage',
            onClickHandler: ()=>movePage('./start'),
            children: '홈',
            borderColor: 'white',
        },
        {
            src: './calandar',
            alt: 'calandarPage',
            onClickHandler: ()=>movePage('./calandar'),
            children: '캘린더',
            borderColor: 'white',
        },
        {
            src: './board',
            alt: 'boardPage',
            onClickHandler: ()=>movePage('./board'),
            children: '게시판',
            borderColor: 'white',
        },
        {
            src: './setting',
            alt: 'settingPage',
            onClickHandler: ()=>movePage('./setting'),
            children: '세팅',
            borderColor: 'white',
        },
    ]

    return btnInfos;
}
