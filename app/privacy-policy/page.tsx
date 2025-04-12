export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-10 md:mx-auto mt-4 md:mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Privacy Policy
      </h1>
      <p className="text-sm text-gray-600 mb-6 text-center">
        Last Updated: <span className="italic">12 April 2025</span>
      </p>

      <p className="mb-8">
        We’re fans just like you — and your privacy matters to us. This policy
        outlines how we handle your data when you use our website. We aim to
        keep things simple, respectful, and transparent.
      </p>

      {/* <!-- Section 1 --> */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Who We Are</h2>
        <p>
          We are a Malaysian fanbase created by DIVE, for DIVE. This site is not
          affiliated with IVE, Starship Entertainment, or any official
          representatives.
        </p>
      </section>

      {/* <!-- Section 2 --> */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          2. What Information We Collect
        </h2>

        <h3 className="font-medium mb-1">a. Group Orders (via SurveyJS)</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Name or nickname</li>
          <li>Email address</li>
          <li>Delivery address</li>
          <li>Item preferences</li>
          <li>Image of payment receipt</li>
        </ul>
        <p className="mb-4">
          <strong>For Minors:</strong> If you are under 18, do not submit
          personal information (like address or email) without parental or
          guardian consent. We assume any submission from a minor is approved by
          a responsible adult.
        </p>

        <h3 className="font-medium mb-1">b. Fan Notifications (Optional)</h3>
        <p className="mb-2">
          If you opt in, we may collect your email to send updates about:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>New group orders</li>
          <li>Birthday events or other fan activities</li>
        </ul>
        <p>
          You may unsubscribe at any time using the link provided or by
          contacting us directly.
        </p>
      </section>

      {/* <!-- Section 3 --> */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. How We Use Your Info</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Manage and fulfill group orders</li>
          <li>Send order-related updates</li>
          <li>Notify subscribed fans about events and group orders</li>
        </ul>
        <p>
          <strong>Use of Information for Delivery and Communication:</strong> We
          use your info only to fulfill orders and send necessary updates. Your
          data is never sold, shared with unrelated third parties, or used for
          marketing. We only retain it for as long as needed to process your
          request.
        </p>
      </section>

      {/* <!-- Section 4 --> */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
        <p>
          We do not use tracking cookies. Any cookies on this site are strictly
          for functionality and do not store personal data.
        </p>
      </section>

      {/* <!-- Section 5 --> */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Data Retention</h2>
        <ul className="list-disc list-inside mb-2">
          <li>
            Group order data is deleted after the order is completed unless
            needed for delivery resolution.
          </li>
          <li>
            Emails collected for notifications are retained until you
            unsubscribe or request removal.
          </li>
        </ul>
      </section>

      {/* <!-- Section 6 --> */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. External Links</h2>
        <p>
          Our site may link to third-party platforms (like Twitter/X). We are
          not responsible for their content or privacy practices.
        </p>
      </section>

      {/* <!-- Section 7 --> */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. Data Security</h2>
        <p>
          We take reasonable measures to safeguard your information. However,
          please note that no digital system is 100% secure.
        </p>
      </section>

      {/* <!-- Section 8 --> */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. Your Rights</h2>
        <ul className="list-disc list-inside mb-2">
          <li>Request access to your personal data</li>
          <li>Ask for corrections or deletion</li>
          <li>Unsubscribe from fan updates at any time</li>
        </ul>
        <p>Feel free to contact us and we’ll assist you promptly.</p>
      </section>

      {/* <!-- Section 9 --> */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          9. Changes to This Policy
        </h2>
        <p>
          This privacy policy may be updated periodically. Updates will be
          reflected here with the revised date.
        </p>
      </section>
    </div>
  );
}
