function Popup(props) {

    function handleCancel() {
        props.onCancel();
    }

    function handleConfirm() {
        props.onConfirm();
    }

    return (
        <div className='popup'>
            <p>Please Confirm or Cancel!</p>

            <button className="button" onClick={handleConfirm}>
                Cofirm
            </button>

            <button className="button button--alt" onClick={handleCancel}>
                Cancel
            </button>
        </div>
    )
}

export default Popup;