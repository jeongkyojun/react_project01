

const navigator = (navigate, param)=>{
    return{
        main:()=>{
            navigate('/', param);
        },
        start: ()=>{
            navigate('/start', param);
        },
        calandar: ()=>{
            navigate('/calandar',param);
        },
        setting: ()=>{
            navigate('/start',param);
        },
        boardDetail: ()=>{
            navigate('/board/'+param.state.postId,param);
        }
    }
}

export default navigator;