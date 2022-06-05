import React from 'react'

import styled from 'styled-components'
import Srushti from './Srushti'
import Srushti1 from './Srushti1'
function Home() {
  return (
    <HiIamContainer>
    
    <Srushti
      title="model Y"
      description="test"
      backgroundImg="model-x.jpg"    
    />
   
  
    <Srushti
    title="model S"
    description="test"
    backgroundImg="model-s.jpg"    
    />
    <Srushti1
    title="model 3"
    description="test"
    backgroundImg="model-3.jpg"    
    />

    
    
    </HiIamContainer>
  )
  
}

  



export default Home
const HiIamContainer=styled.div`height=100vh`
