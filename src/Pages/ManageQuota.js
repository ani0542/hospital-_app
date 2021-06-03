import {useState,useEffect} from 'react'
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import  Dragged from '../components/draggable'
import Header from "../components/common/header/header";
import Dropdown from "../components/dropdown"
import {sumBy} from 'lodash'
import { Tabs } from 'antd';
import swal from 'sweetalert'
import API from '../Services/api.service'

import 'antd/dist/antd.css';
const { TabPane } = Tabs;



const ManageQuota=(props)=>{
    

    let [list,setList]=useState([])
    let [zoneId,setZoneId]=useState('')
    let [loader,setLoader]=useState(false)
    let [vaccineId,setVaccineId]=useState(1)
    let [zones,setZones]=useState([])

    const callback=(key)=>{
        setVaccineId(Number(key))
        }

        useEffect(()=>{
            if(props.match.params.zone_id !== undefined)
            {
                async function fetchZones()
                {
                    await getZones()
                }
                fetchZones()
                setZoneId(Number(props.match.params.zone_id))
            }
        },[props.match.params])


    const getQuotas=async()=>{
    try{
        const quotas=await API.get(`cowinka/karwin_zones/${zoneId}/karwin_categories/${vaccineId}`,{
            headers: {
              'session-token': '35e54318-c93b-44f8-8e0e-862c81962f57'
             
             
            }})
       if(quotas.status === 200)
       {
        setList(quotas.data.result)
       }
       else
       {
        setList([])
       }
    }
    catch(e)
    {
        setList([])
        console.log(e)
    }
    }
    const getZones=async()=>{
        try{
            const zones=await API.get(`cowinka/karwin_zones`,{
                headers: {
                  'session-token': '35e54318-c93b-44f8-8e0e-862c81962f57'
                 
                 
                }})
                console.log(zones)
           if(zones.status === 200)
           {
            setZones(zones.data.karwin_zones)
           }
           else
           {
            setZones([])
           }
        }
        catch(e)
        {
            setZones([])
            console.log(e)
        }
    }


        useEffect(()=>{
            if(zoneId !== '')
            {
                async function fetchData(){
                   await getQuotas()
                   

                }
                fetchData()
                }
                
               
            }
        ,[zoneId,vaccineId])


       const stopDragging=(param)=>{
        console.log(param)
        const srcI = param.source.index;
        const desI = param.destination?.index;
        let list1=list;
          list1.splice(desI, 0, list1.splice(srcI, 1)[0]);
          console.log(list1)
          setList(list1);
       }

       
const editQuota=(e,item)=>{
   
    const updatedQuota=list.map(li=>{
        if(item.id === li.id)
        {
            return {...li,quota:Number(e.target.value)}
        }
        return {...li}
    })
    setList(updatedQuota)
}
const updateQuota=async ()=>{

const updatedList = list.map((li,i)=>{
    return {...li,priority:i+1}
})
const check= sumBy(updatedList,'quota')
if(check > 100)
{
    swal("Error!", "Sum of Quota should not be greater than 100", "error");
}
else
{
    setLoader(true)
   try{
    const quotas=await API.post(`cowinka/karwin_zones/${zoneId}/karwin_categories/${vaccineId}`,{quotas:list},{
        headers: {
          'session-token': '35e54318-c93b-44f8-8e0e-862c81962f57'
         
         
        }})
    
        if(quotas.status === 200)
        {
            setLoader(false)
            swal("Success!", "Updated successfully", "success");
            await getQuotas()
        }
        
   }
   catch(e)
   {
    setLoader(false)
    swal("Error!", "Some problem in updating the quota", "error");
   }
}

}

const handleChange=(e)=>{

setZoneId(e.target.value)
}

    return (
       
        <div className="container-main" >
            <Header />
            <div className="col-md-12" style={{"display":"flex","alignItems":"baseline"}}>
                <div className="col-md-4" style={{"textAlign":"right","marginLeft":"6%"}}>
                    <h1>Allocate Quota vaccines for </h1>
                </div>
                <div className="col-md-8" style={{"textAlign":"left"}}>
                    <Dropdown handleChange={handleChange} id={zoneId} zones={zones}/>
                </div>
            </div>
       <div className="container" style={{"borderRadius":"20px","background":"#fff","paddingTop":"38px","paddingLeft":"40px","paddingBottom":"38px","marginTop":"19px"}}>
           <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="COVISHIELD" key="1">
            
            <div className="col-md-12 mt-4" style={{"float":"left"}}>
                <div className="col-md-4" style={{"fontSize":"14px","fontWeight":"500","color":"#697386","float":"left"}}>Priority order</div>
                <div className="col-md-4" style={{"fontSize":"14px","fontWeight":"500","color":"#697386","float":"left"}}>Category name</div>
                <div className="col-md-4" style={{"fontSize":"14px","fontWeight":"500","color":"#697386","float":"left"}}>Quota of Vaccine (%)</div>
               
            </div>
            
            <DragDropContext   onDragEnd={stopDragging}>

            <Droppable droppableId="droppable-1">
                {
                    (provided,_)=>(
                        <div ref={provided.innerRef} {...provided.droppableProps} style={{ "minHeight": '300px' }}>
                            {
                                list.length > 0?
                                list.map((item,i)=>(
                                    <Dragged item={item} index={i} editQuota={editQuota} />
                                )):'No Quotas allocated'
                               
                                    
                                
                            }
                    {provided.placeholder}          
                </div>
              
                    )

                    
                }
            
            </Droppable>
            </DragDropContext>

           {list.length > 0? <div className="col-md-12">
            <div className="col-md-4 mt-5" style={{"color":"#fff","fontFamily":"Lato","fontSize":"16px","fontWeight":"bold","float":"left"}}>
            <input type="button" className="updateDistrict" value={loader?"LOADING...":"UPDATE"} onClick={updateQuota} /></div></div>:''}

            </TabPane>
            <TabPane tab="COVAXIN" key="2">
            <div className="col-md-12 mt-4" style={{"float":"left"}}>
                <div className="col-md-4" style={{"fontSize":"14px","fontWeight":"500","color":"#697386","float":"left"}}>Priority order</div>
                <div className="col-md-4" style={{"fontSize":"14px","fontWeight":"500","color":"#697386","float":"left"}}>Category name</div>
                <div className="col-md-4" style={{"fontSize":"14px","fontWeight":"500","color":"#697386","float":"left"}}>Quota of Vaccine (%)</div>
               
            </div>
            <DragDropContext   onDragEnd={stopDragging}>

            <Droppable droppableId="droppable-2">
                {
                    (provided,_)=>(
                        <div ref={provided.innerRef} {...provided.droppableProps} style={{ "minHeight": '300px' }}>
                            {
                                list.length > 0?
                                list.map((item,i)=>(
                                    <Dragged item={item} index={i} editQuota={editQuota} />
                                )):'No Quotas allocated'
                               
                                    
                                
                            }
                    {provided.placeholder}          
                </div>
              
                    )

                    
                }
            
            </Droppable>
            </DragDropContext>

            {list.length > 0? <div className="col-md-12">
            <div className="col-md-4 mt-5" style={{"color":"#fff","fontFamily":"Lato","fontSize":"16px","fontWeight":"bold","float":"left"}}>
            <input type="button" className="updateDistrict" value={loader?"LOADING...":"UPDATE"} onClick={updateQuota} /></div></div>:''}


            </TabPane>
            <TabPane tab="SPUTNIK V" key="3">
            <div className="col-md-12 mt-4" style={{"float":"left"}}>
                <div className="col-md-4" style={{"fontSize":"14px","fontWeight":"500","color":"#697386","float":"left"}}>Priority order</div>
                <div className="col-md-4" style={{"fontSize":"14px","fontWeight":"500","color":"#697386","float":"left"}}>Category name</div>
                <div className="col-md-4" style={{"fontSize":"14px","fontWeight":"500","color":"#697386","float":"left"}}>Quota of Vaccine (%)</div>
               
            </div>
            <DragDropContext   onDragEnd={stopDragging}>

            <Droppable droppableId="droppable-3">
                {
                    (provided,_)=>(
                        <div ref={provided.innerRef} {...provided.droppableProps} style={{ "minHeight": '300px' }}>
                            {
                                list.length > 0?
                                list.map((item,i)=>(
                                    <Dragged item={item} index={i} editQuota={editQuota} />
                                )):'No Quotas allocated'
                               
                                    
                                
                            }
                    {provided.placeholder}          
                </div>
              
                    )

                    
                }
            
            </Droppable>
            </DragDropContext>

            {list.length > 0? <div className="col-md-12">
            <div className="col-md-4 mt-5" style={{"color":"#fff","fontFamily":"Lato","fontSize":"16px","fontWeight":"bold","float":"left"}}>
            <input type="button" className="updateDistrict" value={loader?"LOADING...":"UPDATE"} onClick={updateQuota} /></div></div>:''}

            </TabPane>
        </Tabs>
         </div>
         </div>
        )
}

export default ManageQuota;