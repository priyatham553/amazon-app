import React from 'react'
import './Signup.css';

function Signup() {
    return (
        <div>
        <h2>Signup Page</h2>
            <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signup my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign Up</h5>
            <form class="form-signup">
              <div class="form-label-group">
                <input type="First Name" id="inputFirstName" class="form-control" placeholder="First Name" required autofocus/>
                <label for="inputFirstName">First Name</label>
              </div>

              <div class="form-label-group">
                <input type="Last Name" id="inputLastName" class="form-control" placeholder="Last Name" required autofocus/>
                <label for="inputLastName">Last Name</label>
              </div>
              <div class="form-label-group">
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                <label for="inputEmail">Email address</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required autofocus/>
                <label for="inputPassword">Password</label>
              </div>

              
              <button class="btn btn-lg btn-primary btn-block text-uppercase Log-in" type="submit">Signup</button>
              <hr class="my-4"/>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
            
        </div>
    )
}

export default Signup;
