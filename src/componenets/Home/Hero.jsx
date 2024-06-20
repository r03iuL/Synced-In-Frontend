import img from "../../images/BG.jpg";

export default function Hero() {
  return (
    <div
      className="hero min-h-screen mb-0"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-xl text-wrap">
          <h1 className="mb-5 text-5xl font-bold">Find Your <span className="text-green-500">Dream Job!</span></h1>
          <p className="mb-5 text-lg">
            Explore a vast array of job listings from leading companies on
            SyncedIn. Whether you`&apos`re a seasoned professional or just starting
            your career, find the perfect opportunity that aligns with your
            skills and aspirations. Connect with top employers, network with
            industry leaders, and take the next step in your career journey with
            SyncedIn. Your dream job is just a click away.
          </p>
          <a href="/login" className="btn btn-success text-xl text-white ">Get Started</a>
        </div>
      </div>
    </div>
  );
}
