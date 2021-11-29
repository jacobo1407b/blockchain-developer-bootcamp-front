import { FunctionComponent } from 'react';


interface Iprops {
    load?: boolean
}
const Loading: FunctionComponent<Iprops> = ({ load }) => {
    return (
        <>
            {load && (
                <i className="fas fa-circle-notch fa-spin fa-2x"></i>
            )}
        </>
    )
}

export default Loading
Loading.defaultProps = {
    load: false
}
