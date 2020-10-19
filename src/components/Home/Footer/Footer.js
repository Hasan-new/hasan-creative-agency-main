import React from 'react';

const Footer = () => {
    return (
        <section style={{height:'680px', backgroundColor:'#FBD062', marginTop: '70px'}} className="row d-flex">
            <div className="col-md-4 offset-md-1">
                <h1>Let us handle your<br/>project, professionally.</h1>
                <br/>
                <p><small>With well written codes, we build amazing apps for all<br/> platforms, mobile and web apps is general.</small></p>
            </div>
            <div className="col-md-6">
                
                <form className="container-fluid" style={{margin:'5%', padding:'5%'}}>
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input className="form-control" type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>

  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input className="form-control" type="password" class="form-control" id="exampleInputPassword1"/>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
<button className="btn btn-primary ml-5" style={{backgroundColor:'#111430'}}>send</button>
 </div>
 <div className="container-fluid text-center"><small>copyright Orange labs {(new Date()).getFullYear()}</small></div>

 {/* <p className = 'text-center p-3 mt-0' >Copyright Orange labs {(new Date()).getFullYear()} </p> */}

        </section>
        
    );
};

export default Footer;