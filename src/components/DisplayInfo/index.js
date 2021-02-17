import './DisplayInfo.css';

function DisplayInfo(props) {
    const keys = Object.keys(props.words)
    return (
        <div className="displayInfo">
            Named Entity Recognition:
            <div className="displayPar">
            {keys.map(key =>
                (<div className="wordUnit"><span className="wordKey">{key}</span> <span className="wordValue">{props.words[key]}</span></div>)
            )}
            </div>
        </div>
    );
}

export default DisplayInfo;
