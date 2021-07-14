
export default function Image({ src }){
    return(
        <div>
          <img
              style={{
                  width:100,
                  height:100,
                  borderRadius:50,
                  marginRight:100,      
              }}
          
          src={src}/>
        </div>             
        
    )
}