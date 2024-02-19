import React from 'react'

const ContactUs = () => {
  return (
    <section className='book' id='book'>
        <h1 className="heading">contact <span>leave a message</span></h1>
        <form action="">
        <input type="text" placeholder="Name" className="box" />
            <input type="email" placeholder="Email" className="box" />
            <input type="number" placeholder="Number" className="box" />
            <textarea name="" placeholder="Message" className="box" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="send message" className="btn" />
        </form>
    </section>
  )
}

export default ContactUs