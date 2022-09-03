import React from 'react'

export default function Register() {
    return (
        <div>
            <h3> Please Register to Contine</h3>
            <form>
           
            <div className="form-group">User Name :
            <input type="email" name="email" className="form-control" placeholder='thasneemilm@gmail.com'></input>
            </div>



            <div className="form-group"> Password :
            <input type="password" name='password' className="form-control"></input>
            </div>

            <div className="form-group">Confirm Password :
            <input type="password" name='password' className="form-control"></input>
            </div>
            
            </form>
        </div>
    )
}
