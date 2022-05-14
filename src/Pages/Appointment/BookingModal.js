import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from 'react-toastify';
import auth from "../../firebase.init";

const BookingModal = ({treatment, setTreatment, date}) => {
  const [user, loading, error] = useAuthState(auth);
    const {_id, name, slots} = treatment;
  const formattedDate = format(date, "PP");
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        
        const booking = {
          treatmentId: _id,
          treatment: name,
          date: formattedDate,
          slot,
          patient:user.email,
          patientName: user.displayName,
          phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
          method: "POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
          if(data.success){
            toast(`Appointment is set ' ${formattedDate} at ${slot}`)
          }else{
            toast.error(`Already have an Appointment on ' ${data.booking?.date} ${data.booking?.slot} at ${slot}`)
          }
          // TO reset input field
          setTreatment(null)
        })
    }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-xl text-secondary font-bold mb-3 text-center">
            Booking for: {name}
          </h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-4 justify-items-center">
            <input type="text" value={format(date, "PP")} disabled className="input input-bordered w-full max-w-xs" />
            <select name="slot" className="select select-bordered w-full max-w-xs">
                {
                    slots.map((slot, index) => <option value={slot}
                      key={index}
                    >{slot}</option>)
                }
            </select>
            <input type="text" name="name" disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
            <input type="email" name="email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
            <input type="number" name="phone" placeholder="Your Phone" className="input input-bordered w-full max-w-xs" />
            <input type="submit" className="btn btn-md btn-primary uppercase bg-gradient-to-r from-secondary to-primary text-white w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
