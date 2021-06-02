import {Draggable} from 'react-beautiful-dnd'

const Dragged=(props)=>{
    return (<Draggable key={props.item.id} draggableId={`draggable-${props.item.id}`} index={props.index}>
                                        {
                                             (provided,snapshot)=>(
                                                <div  className="col-md-12 mt-4 fl"  style={{
                                                    "float":"left !important"
                                                  }} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <div className="col-md-4" style={{"float":"left"}}>
                                                    <div className="number_block" style={{"float":"left"}}><div className="priority_num" style={{"textAlign":"center","paddingTop":"6px"}}>{props.index+1}</div></div>
                                                </div>
                                                <div className="col-md-4" style={{"float":"left"}}><div style={{"borderBottom":"1px solid #ACB3BF","width":"50%"}}>{props.item.title}</div></div>
                                                
                                                <div className="col-md-4" style={{"float":"left"}}><input type="number" className="quota" value={props.item.quota} onChange={(e)=>props.editQuota(e,props.item)}  style={{"textAlign":"center","paddingTop":"6px"}} /></div> 
                    
                                                </div>
                                             )
                                        }
                            
                                        </Draggable>)
}

export default Dragged