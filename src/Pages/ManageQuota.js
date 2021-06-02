import {useState} from 'react'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
const { TabPane } = Tabs;



const ManageQuota=()=>{
    const list1=[{
        "id":1,
        "priority":1,
        "category":"2nd Dose",
        "quota":"40%"
    },{
        "id":2,
        "priority":2,
        "category":"1st Dose",
        "quota":"30%"
    },
    {
        "id":3,
        "priority":2,
        "category":"1st Dose",
        "quota":"20%"
    },
    {
        "id":4,
        "priority":2,
        "category":"1st Dose",
        "quota":"20%"
    },
    {
        "id":5,
        "priority":2,
        "category":"1st Dose",
        "quota":"20%"
    }]
    let [dragId, setDragId] = useState(0);
    let [list,setList]=useState(list1)

    const callback=(key)=>{
        console.log(key)
        }
        
       const stopDragging=(param)=>{
        console.log(param)
        const srcI = param.source.index;
        const desI = param.destination?.index;
        let list1=list;
          list1.splice(desI, 0, list1.splice(srcI, 1)[0]);
          console.log(list1)
          setList(list1);
       }

       

const test=()=>{
console.log(list)
}


    return (
       <div className="container">
           <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="COVISHIELD" key="1">
            
            <div className="col-md-12 mt-4" style={{"float":"left"}}>
                <div className="col-md-4" style={{"fontSize":"14px","fontWeight":"500","color":"#697386","float":"left"}}>Priority order</div>
                <div className="col-md-4" style={{"fontSize":"14px","fontWeight":"500","color":"#697386","float":"left"}}>Category name</div>
                <div className="col-md-4" style={{"fontSize":"14px","fontWeight":"500","color":"#697386","float":"left"}}>Quota of Vaccine</div>
               
            </div>
            
            <DragDropContext   onDragEnd={stopDragging}>
            <Droppable droppableId="droppable-1">
                {
                    (provided,_)=>(
                        <div ref={provided.innerRef} {...provided.droppableProps} style={{ "minHeight": '300px' }}>
                            {
                                list.map((item,i)=>(
                                    <Draggable key={item.id} draggableId={`draggable-${item.id}`} index={i}>
                                        {
                                             (provided,snapshot)=>(
                                                <div  className="col-md-12 mt-4 fl"  style={{
                                                    "float":"left !important"
                                                  }} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                <div className="col-md-4" style={{"float":"left"}}>
                                                    <div className="number_block" style={{"float":"left"}}><div className="priority_num" style={{"textAlign":"center","paddingTop":"6px"}}>{item.id}</div></div>
                                                </div>
                                                <div className="col-md-4" style={{"float":"left"}}><div style={{"borderBottom":"1px solid #ACB3BF","width":"50%"}}>2nd Dose</div></div>
                                                
                                                <div className="col-md-4" style={{"float":"left"}}><div className="quota"  style={{"textAlign":"center","paddingTop":"6px"}}>{item.quota}</div></div>
                    
                                                </div>
                                             )
                                        }
                            
                                        </Draggable>
                                ))
                               
                                    
                                
                            }
                    {provided.placeholder}          
                </div>
              
                    )

                    
                }
            
            </Droppable>
            </DragDropContext>
            <input type="button" value="submit" onClick={test} />
            </TabPane>
            <TabPane tab="COVAXIN" key="2">
            
            </TabPane>
            <TabPane tab="SPUTNIK V" key="3">
            Content of Tab Pane 3
            </TabPane>
        </Tabs>
         </div>
        )
}

export default ManageQuota;