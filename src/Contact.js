import React, { useState } from 'react';

const Contact = () => {

 

        const [fullName , setFullName] = useState ({
          fname : "",
          lname : "",
          email: "",
          phone : "",
          message: ""
         });
         const inputEvent = (event) => {
         //console.log(event.target.value);
         //console.log(event.target.name);

         //const value = event.target.value;
          //const name = event.target.name;

         const {name , value} = event.target;

         setFullName ((preValue) => {
         //console.log(preValue);

          // for value change multiple lines of code convert into only 2 lines
          return {
            ...preValue,
            [name] : value,
        }
        });
       };
        const onSubmit = (event) => {
        event.preventDefault();
        alert(`Hy My name is ${fullName.fname} ${fullName.lname}, My email is ${fullName.email}
         My number is ${fullName.phone} and my message is ${fullName.message}` );
        }
       
      return(
       <>
        <div className = "my-5" >
            <h1 className = "text-center">Contact us</h1>
          </div >
          <div className = "container contact text-capitalize">
           <div className= "row">
               <div className = "col-md-6 col-10 mx-auto">

           <form onSubmit = {onSubmit}>
           <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label">First Name</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" autoComplete="off"
           name = "fname" 
           onChange = {inputEvent} value ={fullName.fname} placeholder="Enter your First Name" />
         </div>

              <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="exampleFormControlInput1"  autoComplete="off"
           name = "lname" 
           onChange = {inputEvent} value ={fullName.lname} placeholder="Enter your Last Name" />
         </div>
         <div class="mb-3">
         <label for="exampleFormControlInput1" className="form-label">E-mail</label>
          <input type="email" class="form-control" id="exampleFormControlInput1"  autoComplete="off"
           name = "email" 
           onChange = {inputEvent} value ={fullName.email} placeholder="Enter your E-mail" />
         </div>
         <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label">Mobile Number</label>
          <input type="number" class="form-control" id="exampleFormControlInput1"  autoComplete="off"
           name = "phone" 
           onChange = {inputEvent} value ={fullName.phone} placeholder="Enter your Mobile Number" />
         </div>
         <div class="mb-3">
           <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" name = "message" 
           onChange = {inputEvent} value ={fullName.message}  rows="3"></textarea>
              </div>

              <button type="submit" class="btn btn-outline-primary mb-5">Submit</button>

               </form>
               </div>
           </div>
           </div>

       

    </>
   )
}
export default Contact;