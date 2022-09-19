import React from 'react';

export default function Contact() {
  return (
    <div>
        <h1>Contact Page</h1>
        <form>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email@email.com" />
            </div>
            <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    
    </div>
  );
}
