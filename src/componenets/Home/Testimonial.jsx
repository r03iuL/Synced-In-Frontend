
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonials = [
  {
    name: 'John Doe',
    title: 'Software Engineer',
    quote: 'This is an amazing platform. It has helped me find my dream job!',
    image: 'https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?t=st=1718980673~exp=1718984273~hmac=985b003b0e9b4287c0b16c6e56d46a3299469b9d779312628c840a19f2eecb4b&w=1060',
  },
  {
    name: 'Jane Smith',
    title: 'Project Manager',
    quote: 'Great user experience and excellent customer support!',
    image: 'https://img.freepik.com/free-photo/handsome-bearded-businessman-rubbing-hands-having-deal_176420-18778.jpg?t=st=1718980856~exp=1718984456~hmac=ddfc0058ba83247f666e43c8592aac39296380f69400508347f29fd4c962eee5&w=1060',
  },
  {
    name: 'Michael Brown',
    title: 'Data Analyst',
    quote: 'A seamless process from start to finish. Highly recommend!',
    image: 'https://img.freepik.com/premium-photo/young-brazilian-man-isolated-white-background-laughing_1368-362553.jpg?w=1060',
  },
  {
    name: 'Emily White',
    title: 'UX Designer',
    quote: 'I found numerous opportunities that fit my skills perfectly. Fantastic platform!',
    image: 'https://img.freepik.com/free-photo/friendly-smiling-woman-looking-pleased-front_176420-20779.jpg?t=st=1718981657~exp=1718985257~hmac=06463a5d255415269c1e171e4cee83f607d4811a79c288d012c5c66969e35bb9&w=1060',
  },
  {
    name: 'David Wilson',
    title: 'Marketing Specialist',
    quote: 'The job search functionality is top-notch. I landed a great job in no time!',
    image: 'https://img.freepik.com/free-photo/pretty-self-confident-female-model-with-afro-hair-keeps-hand-raised-smiles-gently-looks-directly-listens-attentively-interlocutor-wears-stylish-velvet-jacket_273609-46286.jpg?t=st=1718981727~exp=1718985327~hmac=732618a354061f80bbab5923588fbe91692004f62cef240cf9e5df1690496bee&w=1060',
  }
];

const Testimonials = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-left text-4xl font-semibold mb-8 text-gray-800 border-l-8 px-2 py-2 border-green-500">What Our Users Say</h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col  max-w-[50%] mx-auto items-center p-20 bg-base-200 shadow-md rounded-lg border-4 border-green-500">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className=" h-52 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-sm text-gray-600">{testimonial.title}</p>
              <p className="mt-4 text-center text-gray-800">{testimonial.quote}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
