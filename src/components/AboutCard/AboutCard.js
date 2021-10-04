import React from 'react';
import './AboutCard.css'
const AboutCard = () => {
    return (
        <div>
            <div className="card my-5 mx-auto" style={{ maxWidth: '80vw', maxHeight: '50vh' }}>
                <div className="row g-0">

                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title fw-bold">Work With Our Expert Fitness Coach</h4>

                            <p className="card-text text-secondary">Our skilled trainers can help you meet your dream fitness goals. They can become your trainer, your motivator, your personal coach and your buddy. Our expert trainers are recognized and certified by renowed accredited fitness organizations.</p>
                            <p className="card-text text-secondary">Our personal trainers can experience working with thousands of clients who have meet their fitness goals. You will be constanty monitored by our trainers so that they can track your progress and give you feedback on your journey and guide you in every step that you will be taking towards your fitness goal.</p>
                        </div>
                    </div>
                    <div className="col-md-4 ">

                        <img src="https://www.mensjournal.com/wp-content/uploads/mf/_main2_trainer2.jpg?w=900&h=506&crop=1&quality=86&strip=all" className="img-fluid rounded-start h-100" alt="..." />

                    </div>

                </div>
            </div>


            <h1>Our Coaches</h1>
            <p>We have expert certified trainers to run our premium training courses</p>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto mt-3 mb-5" style={{ maxWidth: '80vw', maxHeight: '50vh' }}>

                <div className="col">
                    <div className="card h-100 border border-secondary">
                        <img src="https://media.istockphoto.com/photos/fitness-trainer-at-gym-picture-id1072395722?k=20&m=1072395722&s=612x612&w=0&h=zhxJbv4VDqOqt5JwXI7CgZ0CXfXtagmdtF2mSITW0eo=" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Steve Clark</h5>
                            <p className="card-text">Fitness Coach
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border border-secondary">
                        <img src="https://media.istockphoto.com/photos/portrait-of-chinese-personal-trainer-in-gym-picture-id1018043738?k=20&m=1018043738&s=612x612&w=0&h=9qZelesrux2DeXL9OMcoO3hK8cBPaa9qwTc_wHXdo7k=" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Zung Ming</h5>
                            <p className="card-text">Weight loss Coach</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 border border-secondary">
                        <img src="https://media.istockphoto.com/photos/african-american-male-trainer-with-clipboard-picture-id475495254?b=1&k=20&m=475495254&s=170667a&w=0&h=sjcf4PBokL7W9u5c5HWlAutxpPNDvz3BOar4yUWVoRQ=" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Russel Arnold</h5>
                            <p className="card-text">Workout Coach</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default AboutCard;