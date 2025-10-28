import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
    {
        question: "What is a bespoke fragrance?",
        answer: "A bespoke fragrance is a scent created exclusively for an individual. At Enigmatic Elixirs, you are the perfumer. You'll select the top, heart, and base notes from our extensive library of ingredients to craft a scent that perfectly matches your personality and style."
    },
    {
        question: "How long does the creation process take?",
        answer: "The online creation process is at your own pace! You can experiment as much as you like. Once you finalize your formula, our perfumers will blend, bottle, and ship your custom elixir within 5-7 business days."
    },
    {
        question: "What if I don't know which scents to choose?",
        answer: "That's what our AI Scent Profile Tool is for! Simply describe a mood, a memory, or your personality, and our AI will suggest unique formulations as a starting point. You can also book a private consultation for one-on-one guidance from our master perfumer."
    },
    {
        question: "What kind of ingredients do you use?",
        answer: "We use a curated collection of high-quality natural essences and safe, cutting-edge synthetic molecules. This hybrid approach allows for a broader creative palette and ensures the stability and longevity of your final fragrance. You can explore our full Ingredient Library page for more details."
    },
    {
        question: "Can I re-order my custom fragrance?",
        answer: "Absolutely! When you create a fragrance, you give it a unique name. This formula is saved to your profile. You can log in anytime to re-order your signature scent or even tweak the formula for a new creation."
    },
    {
        question: "Do you offer gift cards?",
        answer: "Yes, we do! An Enigmatic Elixirs gift card is the perfect present for any occasion. It allows the recipient to enjoy the full experience of creating their own signature scent. You can purchase one on our Gift Card page."
    }
]

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl">Frequently Asked Questions</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Answers to common questions about our custom fragrance experience.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-headline text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                    {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  )
}