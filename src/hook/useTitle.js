import{ useEffect } from 'react';

const useTitle = (title) => {
    useEffect(()=>{
        document.title=`${title}_Doctor`
    },[title])

};

export default useTitle;
