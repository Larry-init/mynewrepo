import React from 'react'


const Login = () => {
    return(
        <div className='container'>
            <h2 className='pt-3'>Login</h2>
       
            <form>
           
                <div className="mb-3">
                    <label for="exampleInputEmail" class="form-label">Email</label>
                    <input type="name" class="form-control" id="exampleInputName" /> 
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword" class="form-label">Password</label>
                    <input type="name" class="form-control" id="exampleInputName" /> 
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login