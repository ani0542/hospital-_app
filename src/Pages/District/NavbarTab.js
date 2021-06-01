import React from 'react'
import { Tab } from 'semantic-ui-react'


const panes = [
    {
      menuItem: 'Tab 1',
      render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane>,
    },
    {
      menuItem: 'Tab 2',
      render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>,
    },
  ]


function NavbarTab() {
    return (
        <>
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} /> 
        </>
    )
}

export default NavbarTab
