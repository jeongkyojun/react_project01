export const validateName = (name)=>{
    if(name.length==0) return {code:false, text:'이름을 입력하세요'};
    return {code:true};
}