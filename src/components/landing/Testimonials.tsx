import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    quote: "Cyberk delivered our MVP in record time, allowing us to secure our next funding round. Their speed and expertise are unmatched.",
    name: "Alex Johnson",
    title: "CEO of Aethir"
  },
  {
    quote: "Working with Cyberk felt like having a co-founder on the technical side. They are true partners who are invested in your success.",
    name: "Samantha Lee",
    title: "Founder of Helix"
  },
  {
    quote: "The quality of work and the speed of execution exceeded all our expectations. We're already planning our next project with them.",
    name: "Michael Chen",
    title: "CTO of Coinseeker"
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What Our Partners Say
        </h2>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="bg-gray-900/50 p-8 rounded-lg h-full flex flex-col">
                    <p className="text-gray-300 mb-6 flex-grow">"{testimonial.quote}"</p>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials;