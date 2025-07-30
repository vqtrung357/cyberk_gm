import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is your MVP delivery guarantee?",
    answer: "We guarantee MVP delivery in less than 30 days. This allows startups to get to market faster than anyone else without compromising on quality."
  },
  {
    question: "Who is Cyberk for?",
    answer: "Cyberk is built for entrepreneurs and early-stage startups in the Web3 space who need a fast, reliable, and expert technology partner."
  },
  {
    question: "What makes you different from other tech studios?",
    answer: "We are founders ourselves and understand the importance of speed and execution. We act as a true partner, not just a service provider, treating your vision as our own."
  },
  {
    question: "Do you only work on Web3 projects?",
    answer: "Yes, we specialize in Web3 technologies. Our focus allows us to stay at the forefront of the industry and deliver cutting-edge solutions for our clients."
  }
]

const FAQ = () => {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg font-medium text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FAQ;