import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date, setDate }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, "PP");

    const { isLoading, error, data: services, refetch } = useQuery(['available', formattedDate], () =>
     fetch(`http://localhost:5000/available?date=${formattedDate}`)
     .then(res => res.json()
     )
   )
   if(isLoading){
       return <Loading></Loading>
   }

    // useEffect(()=> {
    //     fetch(`http://localhost:5000/service`)
    //     .then(res => res.json())
    //     .then(data => setServices(data));
    // },[]);

    return (
        <div>
            <h2 className='text-2xl font-bold text-secondary text-center mb-10'>Available Appointments on : {format(date, "PP")}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <Service 
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}/>)
                }
                {
                    treatment && <BookingModal 
                    date={date} 
                    treatment={treatment}
                    refetch={refetch}
                    setTreatment={setTreatment}
                    />
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;