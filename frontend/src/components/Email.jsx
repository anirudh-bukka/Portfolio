// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

// // function Email() {
// //     const form = useRef();

// //     const sendEmail = (e) => {
// //       e.preventDefault();
  
// //       emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
// //         .then((result) => {
// //             console.log(result.text);
// //         }, (error) => {
// //             console.log(error.text);
// //         });
// //     };
  
// //     return (
// //       <form ref={form} onSubmit={sendEmail}>
// //         <label>Name</label>
// //         <input type="text" name="user_name" />
// //         <label>Email</label>
// //         <input type="email" name="user_email" />
// //         <label>Message</label>
// //         <textarea name="message" />
// //         <input type="submit" value="Send" />
// //       </form>
// //     );
// // }

// // export default Email;


// // export const ContactUs = () => {
  
// // };


// export default function Email() {
//   const [modal, setModal] = useState(false);

//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   if(modal) {
//     document.body.classList.add('active-modal')
//   } else {
//     document.body.classList.remove('active-modal')
//   }

//   return (
//     <>
//       <button onClick={toggleModal} className="btn-modal">
//         Email
//       </button>

//       {modal && (
//         <div className="modal">
//           <div onClick={toggleModal} className="overlay"></div>
//           <div className="modal-content">
//             <h2>Hello Modal</h2>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             </p>
//             <button className="close-modal" onClick={toggleModal}>
//               CLOSE
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function Email({ open, children, onClose }) {
  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}