

function Alert(props) {
    const capatilize = (word) => {
        var lower = word.toLowerCase();
        lower = lower[0].toUpperCase() + lower.slice(1);
        return lower;
    }
  return (
    <div style={{height:'65px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type}`}>{capatilize(props.alert.type)} : {props.alert.message}</div>}
    </div>
  )
}

export default Alert