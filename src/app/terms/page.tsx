export default function TermsOfServicePage() {
    return (
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl">Terms of Service</h1>
            <p className="mt-4 text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-headline text-2xl text-foreground mb-4">1. Agreement to Terms</h2>
              <p>
                By using our website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services. We may modify these terms at any time, and such modifications shall be effective immediately upon posting of the modified terms.
              </p>
            </section>
            <section>
              <h2 className="font-headline text-2xl text-foreground mb-4">2. The Service</h2>
              <p>
                Enigmatic Elixirs provides an online platform for users to create, customize, and purchase personalized fragrances. We reserve the right to modify or discontinue the service with or without notice to you.
              </p>
            </section>
            <section>
              <h2 className="font-headline text-2xl text-foreground mb-4">3. User Accounts</h2>
              <p>
                To access certain features of the site, you may be required to create an account. You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>
            <section>
              <h2 className="font-headline text-2xl text-foreground mb-4">4. Intellectual Property</h2>
              <p>
                All content on this site, including but not limited to text, graphics, logos, and images, is our property or the property of our content suppliers and is protected by international copyright laws. The compilation of all content on this site is our exclusive property.
              </p>
            </section>
            <section>
              <h2 className="font-headline text-2xl text-foreground mb-4">5. Limitation of Liability</h2>
              <p>
                In no event shall Enigmatic Elixirs, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
  