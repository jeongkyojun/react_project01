

const navigator = (navigate, param)=>{
    return{
        main:()=>{

        },
        start: ()=>{
            navigate('/start', param);
        },
        calandar: ()=>{
            navigate('/calandar',param);
        }
    }
}

export default navigator;