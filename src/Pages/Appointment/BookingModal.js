import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const BookingModal = ({treatment, setTreatment, date}) => {
  const [user, loading, error] = useAuthState(auth);
    const {_id, name, slots} = treatment;

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name , slot);
        setTreatment(null)
    }
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
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
            <input type="submit" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
