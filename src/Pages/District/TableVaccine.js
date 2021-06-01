import React from 'react'
import {  Input,Table,Icon } from 'semantic-ui-react'

function TableVaccine() {
    return (
        <>
                     <div className='entry_vaccine mt-4'> 
                                        <Input
                                           icon='search'
                                           iconPosition='left'
                                           placeholder='Search center name or pincode'
                                           className='input_search mt-5'
                                       />
                                                 <Table columns={5} >
                                                 <Table.Header>
                                                 <Table.Row>
                                                        <Table.HeaderCell className='header_row'>SL no</Table.HeaderCell>
                                                        <Table.HeaderCell className='header_row'>Center name</Table.HeaderCell>
                                                        <Table.HeaderCell className='header_row'>Action</Table.HeaderCell>
                                                        <Table.HeaderCell className='header_row'>Pincode</Table.HeaderCell>
                                                     
                                                 </Table.Row>
                                                 </Table.Header>

                                                 <Table.Body>
                                                 <Table.Row>
                                                        <Table.Cell className='rectangle_slno'>
                                                               <span className='rectangle_slno_span'>1</span>
                                                        </Table.Cell>
                                                        <Table.Cell className='center_name'>center name 1</Table.Cell>
                                                        <Table.Cell className='online_stats'>
                                                               <li>Check online stats</li>
                                                        </Table.Cell>
                                                        <Table.Cell className='pincode'>560070</Table.Cell>
                                                        <Table.Cell>
                                                               <Icon name='trash alternate outline'/>
                                                        </Table.Cell>
                                                 </Table.Row>
                                                 <Table.Row>
                                                        <Table.Cell className='rectangle_slno'> <span className='rectangle_slno_span'>2</span></Table.Cell>
                                                        <Table.Cell className='center_name'>center name 2</Table.Cell>
                                                        <Table.Cell className='online_stats'>
                                                             <li>Check online stats</li>
                                                        </Table.Cell>
                                                        <Table.Cell  className='pincode'>560070</Table.Cell>
                                                        <Table.Cell>
                                                             <Icon name='trash alternate outline'/>
                                                        </Table.Cell>
                                                 </Table.Row>
                                                 <Table.Row>
                                                        <Table.Cell className='rectangle_slno'><span className='rectangle_slno_span'>3</span></Table.Cell>
                                                        <Table.Cell className='center_name'>center name 3</Table.Cell>
                                                        <Table.Cell className='online_stats'>
                                                             <li>Check online stats</li>
                                                        </Table.Cell>
                                                        <Table.Cell  className='pincode'>560070</Table.Cell>
                                                        <Table.Cell>
                                                             <Icon name='trash alternate outline' className='trash_outline'/>
                                                        </Table.Cell>
                                                 </Table.Row>
                                                 </Table.Body>
                                                 </Table>
                                       </div>
        </>
    )
}

export default TableVaccine
