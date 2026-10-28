const benefits = [
  {
    title: 'Recognition you can see',
    description: 'FMN named Emmachi Imperial Enterprises Top Bread Flour Customer, Lagos Region, in two consecutive B2B sales years.',
    details: ['2023/24 B2B Sales Award', '2024/25 B2B Sales Award'],
  },
  {
    title: 'A place to meet our team',
    description: 'Visit either Lagos outlet to discuss products and your wholesale requirements.',
    details: ['Iddo — Heyden trailer park, Iddo underbridge', 'Suru Alaba — A40, Army Mammy Market'],
  },
  {
    title: 'A quote for your order',
    description: 'Tell us the brand, pack size and quantity you need. Our team will confirm stock and current prices before you order.',
    details: ['Pricing based on your product list', 'Delivery arrangements confirmed with our team'],
  },
  {
    title: 'A direct conversation',
    description: 'Start your enquiry on WhatsApp. Send your requirements and delivery location so our team can help.',
    details: ['Product or brand', 'Quantity and delivery location'],
    action: true,
  },
];

export default function BentoGrid() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl text-gray-900 mb-3">Why businesses choose us</h2>
          <p className="text-base text-gray-600 max-w-lg mx-auto">
            Awards you can inspect, outlets you can visit, and a team you can speak to.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="border-t-2 border-depot pt-6 pb-4">
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed max-w-lg">{benefit.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-gray-700">
                {benefit.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span aria-hidden="true" className="text-depot">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              {benefit.action && (
                <a
                  href="https://wa.me/2348028851717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 text-depot font-semibold underline underline-offset-4 hover:text-emerald-800 transition-colors"
                >
                  Start a WhatsApp enquiry
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
