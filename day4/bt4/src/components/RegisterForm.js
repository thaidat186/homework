import React,{ useState } from "react"

export default function RegisterForm (){
    
    const [firstname,setFirstName] = useState("")
    const [lastname,setLastName] = useState("")
    const [gender,setGender] = useState("")
    const [age,setAge] = useState()
    const [address,setAddress] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [confirmPassword,setConfirmPassword] = useState()

    const changeFirstName = (event) => {
        event.preventDefault()
        setFirstName(event.target.value)
        

    }

    const changeLastName = (event) => {
        event.preventDefault()
        setLastName(event.target.value)
        
      
    }

    const changeGender = (event) => {
        event.preventDefault()
        setGender(event.target.value)

    }

    const changeAge = (event) => {
        event.preventDefault()
        setAge(event.target.value)
        
      
    }

    const changeAddress = (event) => {
        event.preventDefault()
        setAddress(event.target.value)
        
        
    }

    const changeEmail = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
        
     
    }

    const changePassword = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
        
    

    }
    const changeConfirmPassword = (event) => {
        event.preventDefault()
        setConfirmPassword(event.target.value)

    }

    const fieldCheck = (event) => {
        event.preventDefault()
        console.log(firstname,lastname)
        if (firstname == "" || lastname =="" || age <= 0 || email == "" || password == ""  ){
            alert("all fields must be valid data")
        }
        else if (password != confirmPassword){
            alert("password không giống")

        }
        else{
            alert(
                `Bạn đã đăng ký thành công
                Họ và tên: ${firstname} ${lastname}
                Giới tính: ${gender}
                Tuổi: ${age}
                Address: ${address}
                Email: ${email}`
            )
        }
    }




    return (<form>
        <div>First name: <input type="text" onChange={(event)=>changeFirstName(event)}></input></div>
        <div>Last name: <input type="text" onChange={(event)=>changeLastName(event)}></input></div>
        <div>Gender: <input type="text"onChange={(event)=>changeGender(event)}></input></div>
        <div>Age: <input type="text"onChange={(event)=>changeAge(event)}></input></div>
        <div>Address:  <input type="text"onChange={(event)=>changeAddress(event)}></input></div>
        <div>Email: <input type="text"onChange={(event)=>changeEmail(event)}></input></div>
        <div>Password: <input type="password" onChange={(event)=>changePassword(event)}></input></div>
        <div>Confirm password: <input type="password" onChange={(event)=>changeConfirmPassword(event)}></input></div>
        <div><button onClick={(event)=>fieldCheck(event)}>Register</button></div>


    </form>
       
    )
}