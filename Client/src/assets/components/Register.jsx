import React,{useState} from 'react'

export default function Register() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [mobile,setMobile]=useState("")
    return (
        <div className='container'>
            <div className='row'>
                <from className='col-12 col-md-6'>
                    <div className='mb-3'>
                        <h1>Register</h1>
                    </div>
                    <div>
                        <div class="mb-3">
                            <label htmlFor="" class="form-label">Name</label>
                            <input type="text" class="form-control"/>
                        </div>
                    </div>
                </from>
            </div>
        </div>
    )
}