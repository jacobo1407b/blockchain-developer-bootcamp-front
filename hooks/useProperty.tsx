import { useEffect,useState} from 'react';
import { useSelector } from 'react-redux';

function useProperty() {
    const property = useSelector((state: any) => state.contract);
    const user = useSelector((state: any) => state.user);
    const [methods, setMethods] = useState<any>(null);


    useEffect(() => {
        (async () => {
            setMethods(property?.AssetT?.methods)
        })()
    }, [property?.AssetT])
    return {methods,address:user?.address};
}

export default useProperty
