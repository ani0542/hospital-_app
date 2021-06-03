
const Dropdown = (props) => {
    console.log(props)
    return (
        <div class="select">
            <select class="select-text" value={props.id ? props.id.toString() : ""} onChange={props.handleChange} required>
                {
                    props.zones.map(zone => (
                        <option value={zone.id} selected={Number(zone.id) === Number(props.id) ? true : false}>{zone.title}</option>
                    ))
                }
                {/* <option value="" disabled selected></option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option> */}
            </select>
            <span class="select-highlight"></span>
            <span class="select-bar"></span>
            <label class="select-label">Select</label>
        </div>



    )
}
export default Dropdown