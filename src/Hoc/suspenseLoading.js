import React from 'react';
import Preloader from '../components/Common/Preloader/Preloader';


export const SuspenseLoading = (Component) => {
    return (props) => {
        debugger;
        return (
            <React.Suspense fallback={<Preloader/>}>
                <Component {...props}/>
            </React.Suspense>
        );
    }
}




