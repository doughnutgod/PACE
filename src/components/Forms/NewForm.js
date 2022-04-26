import {useRef} from 'react';
import classes from './NewForm.module.css'
import Card from '../ui/Card';

function NewForm() {
    const locationinput = useRef();
    const poolref = useRef();
    const custref = useRef();
    const outputref = useRef();
    const colorref = useRef();
    const labelref = useRef();

    function handleSubmit(event) {
        event.preventDefault();

        const enteredloc = locationinput.current.value;
        const enteredpool = poolref.current.value;
        const enteredcust = custref.current.value;
        const enteredout = outputref.current.value;
        const enteredcol = colorref.current.value;
        const enteredlab = labelref.current.value;

        const formdata = {
            Location: enteredloc,
            Pool_Size: enteredpool,
            Cust_Count: enteredcust,
            Output: enteredout,
            Color: enteredcol,
            Labels: enteredlab 
        };

        console.log(formdata);

    }


    return <Card>
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.container}>
                <label htmlFor='title'>Location Address</label>
                <input type='text' required id='title' ref={locationinput}/>
            </div>
            <div className={classes.container}>
                <label htmlFor='poolsize'>Pool Dimensions in feet</label>
                <select id='poolsize' ref={poolref}>
                    <option value="16' X 32'">Pool Size = 16' X 32'</option>
                    <option value="15' X 36'">Pool Size = 15' X 36'</option>
                    <option value="18' X 32'">Pool Size = 18' X 32'</option>
                    <option value="20' X 40'">Pool Size = 20' X 40'</option>
                </select>
            </div>
            <div className={classes.container}>
                <label htmlFor='custcount'>Count of the Customers per hour (to nearest 100)</label>
                <select id='custcount' ref={custref}>
                    <option value="100">Customers = 100</option>
                    <option value="200">Customers = 200</option>
                    <option value="300">Customers = 300</option>
                    <option value="400">Customers = 400</option>
                </select>
            </div>
            <div className={classes.container}>
                <label htmlFor='output'>Output Generation</label>
                <select id='output' ref={outputref}>
                    <option value="Clustered Bar">Clustered Bar</option>
                    <option value="Histogram">Histogram</option>
                    <option value="Scatterplot">Scatterplot</option>
                </select>
            </div>
            <div className={classes.container}>
                <label htmlFor='chartcolor'>Output Color</label>
                <select id='chartcolor' ref={colorref}>
                    <option value="High-Contrast">High-Contrast</option>
                    <option value="Colorblind Option 1">Colorblind Option 1</option>
                    <option value="Colorblind option 2">Colorblind option 2</option>
                </select>
            </div>
            <div className={classes.container}>
                <label htmlFor='labels'>Labelling?</label>
                <select id='labels' ref={labelref}>
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                </select>
            </div>
            <div className={classes.action}>
                <button >Submit</button>
            </div>
        </form>

    </Card>
}

export default NewForm;