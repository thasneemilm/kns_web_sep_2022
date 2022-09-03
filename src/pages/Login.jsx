import React from 'react'

export default function Login() {
    return (
        <div>
            <h3> Please login to Contine</h3>
            <form>
           
            <div className="form-group">
            <input type="text" name="username" className="form-control" placeholder='thasneemilm@gmail.com'></input>
            </div>

            <div className="form-group">
            <input type="password" name='password' className="form-control"></input>
            </div>
            
            </form>
        </div>
    )
}
