export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-3xl mx-auto prose dark:prose-invert">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 text-lg text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-headline text-2xl text-foreground mb-4">1. Introduction</h2>
            <p>
              Welcome to Enigmatic Elixirs. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>
          <section>
            <h2 className="font-headline text-2xl text-foreground mb-4">2. Collection of Your Information</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect on the Site includes personal data, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
            </p>
          </section>
          <section>
            <h2 className="font-headline text-2xl text-foreground mb-4">3. Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to create and manage your account, process your transactions, and deliver to you the products and services that you have requested.
            </p>
          </section>
          <section>
            <h2 className="font-headline text-2xl text-foreground mb-4">4. Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows: by law or to protect rights, if we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.
            </p>
          </section>
          <section>
            <h2 className="font-headline text-2xl text-foreground mb-4">5. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us through the contact form on our website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
