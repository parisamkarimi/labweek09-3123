function SayHello({fname, lname}/*props*/){
    //const name ="Parisa"
    const myStyle={
        color:'red',
        backgroundColor:'yellow'
    }
    return(
        <h1 style={myStyle}>Hello {fname} {lname}</h1>
    )
}

export default SayHello;