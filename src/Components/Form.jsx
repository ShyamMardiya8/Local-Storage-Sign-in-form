import React from 'react'
import {Formik, Form, Field} from 'formik'
import {useDispatch, useSelector} from 'react-redux'
import {userLog} from './Store/CartSlice'
import * as yup from 'yup'

function FormData() {
    const dispatch = useDispatch()
    const select = useSelector((state) => state.userLog.data) 
    console.log("storage Data " , select)
    console.log("select value is ", select);
    
    const onSubmit = (value, {resetForm}) => {
        dispatch(userLog(value))
        console.log("Entered data is ", value)
        resetForm()
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
                        <h1 className='text-center'>Sign In</h1>
                        <div className="container d-flex justify-content-center">
                            <div className="col-md-8">
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
                                        <button className="btn btn-outline-primary px-5 my-2" >Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Form>
                )
            }
        }
    </Formik>
    </>
  )
}

export default FormData