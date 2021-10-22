import {FunctionComponent} from 'react';
interface ITitle {
    pageName:string
}
const TitleBar:FunctionComponent<ITitle> = ({pageName}):JSX.Element=> {
    return (
        <div className="mb-2">
            <p className="text-lg font-semibold text-gray-400">{pageName}</p>
        </div>
    )
};

export default TitleBar;