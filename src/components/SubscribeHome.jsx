import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[30vh] md:h-[35vh] lg:h-[45vh]">
      <img
        src="https://i.pinimg.com/originals/6d/38/5d/6d385d010d7e5006312c8fbaeacdb3a1.jpg"
        alt="Hero"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <Button variant="pink" >
          Inscreva-se na Copa PAB
        </Button>
      </div>
    </section>
  );
}
