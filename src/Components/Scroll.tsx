import React from 'react' 

interface reactChildren {
    children: React.ReactNode
}

const Scroll = ({children}:reactChildren) => {
    return (
        <div style={{overflow: 'scroll', height: "70vh", border: "1px solid black"}}>
            {children}
        </div>
    )
}

export default Scroll