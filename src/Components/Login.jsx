import React from 'react'
import {Formik, Form, Field} from 'formik'
import { useSelector} from 'react-redux'
 
import * as yup from 'yup'

function Login() {
 
    const select = useSelector((state) => state.userLog.some) 
    console.log("storage Data " , select) 

 
    
    const onSubmit = value => {
        const {email, password} = value
        const checkUser = select.find((item) => item.email === email && item.password === password)
      if(checkUser){
        alert('successfully login in app')
      }
      else{
        alert('incorrect email and password')
      }
      
    }
    const initialValues = {
        email : "",
        password : ""
    }
    const validationSchema = yup.object({
        email: yup.string().email().required('Required'),
        password: yup.string().required('Required')
    })
  return (
    <>
     <Formik
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    initialValues={initialValues}
    >
        {
            () => {
                return(
                    <Form>
                        <h1 className='text-center'>Login</h1>
                        <div className="container d-flex justify-content-center ">
                            <div className="col-md-8 ">
                                <div className="row">
                                    <div className="form-floating mb-3">
                                        <Field 
                                        type="email" 
                                        name="email" 
                                        id='email'
                                        placeholder='text'
                                        className='form-control'
                                        />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="form-floating">
                                        <Field
                                         type="password" 
                                        name="password" 
                                        id='password'
                                        placeholder='text'
                                        className='form-control'
                                        />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-outline-primary my-3 px-5"  >Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )
            }
        }
    </Formik></>
  )
}

export default Login