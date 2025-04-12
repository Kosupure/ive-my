export default function TermsConditions() {
  return (
    <div className="max-w-4xl mx-10 md:mx-auto mt-4 md:mt-10">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Terms & Conditions
      </h1>
      <p className="text-sm text-gray-600 mb-6 text-center">
        Last Updated: <span className="italic">12 April 2025</span>
      </p>

      <p className="mb-8">
        Welcome to the official site of IVE Malaysia Fanbase — made by DIVE, for
        DIVE. By using our site, you agree to the following terms and
        conditions. If you do not accept them, please refrain from using the
        website.
      </p>

      {/* <!-- Section 1 --> */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Unofficial Fanbase</h2>
        <p>
          This is an <strong>unofficial</strong> fan-run project by Malaysian
          DIVEs (fans of IVE). We are <strong>not affiliated with IVE</strong>,
          Starship Entertainment, or any official representatives. All
          IVE-related media remains the property of its rightful owners.
        </p>
      </section>

      {/* <!-- Section 2 --> */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">2. Website Usage</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Interact respectfully and abide by all applicable laws</li>
          <li>
            Avoid any form of misuse, tampering, or disruption of the site
          </li>
          <li>
            Refrain from posting false, offensive, or misleading information
          </li>
        </ul>
      </section>

      {/* <!-- Section 3 --> */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">3. Group Orders</h2>
        <p className="mb-2">
          We assist Malaysian DIVEs with placing group orders for official IVE
          merchandise and fan-created items.
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>
            Each group order will include full details like prices, deadlines,
            and shipping info
          </li>
          <li>
            Once payment is completed,{" "}
            <strong>no cancellations or refunds</strong> will be issued (unless
            stated otherwise)
          </li>
          <li>
            We are <strong>not responsible</strong> for delays or issues caused
            by suppliers, couriers, or customs
          </li>
          <li>
            Participation is voluntary, and buyers accept the risks involved
          </li>
        </ul>
        <p className="mb-1 font-medium">Use of Your Info for Orders:</p>
        <p className="mb-2">
          Your personal details (e.g. name, email, shipping address) will only
          be used to manage and deliver your order. We do <strong>not</strong>{" "}
          use this data for marketing or share it with third parties.
        </p>

        <p className="mb-1 font-medium">Age Requirement:</p>
        <p>
          If you&#39;re under 18, please make sure you have a parent or guardian’s
          permission before joining any group orders or submitting personal
          info.
        </p>
      </section>

      {/* <!-- Section 4 --> */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Order Tracking</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            A tracking page is available to check your order status (e.g.
            payment received, items shipped)
          </li>
          <li>Updates are manual and may not reflect real-time data</li>
          <li>
            We strive for accuracy but cannot guarantee delivery timelines
          </li>
        </ul>
      </section>

      {/* <!-- Section 5 --> */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">5. Birthday Projects</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            We may link to <strong>Twitter/X</strong> posts related to birthday
            events for IVE members
          </li>
          <li>No submissions or donations are collected through our site</li>
          <li>Participation takes place externally via the provided links</li>
        </ul>
      </section>

      {/* <!-- Section 6 --> */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Intellectual Property</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            All media (photos, videos, music, logos) belong to{" "}
            <strong>Starship Entertainment</strong> or their original owners
          </li>
          <li>
            We do <strong>not claim ownership</strong> and use them solely for
            non-commercial, fan-based purposes
          </li>
          <li>
            Please <strong>do not repost or reuse</strong> content from this
            site without permission
          </li>
        </ul>
      </section>

      {/* <!-- Section 7 --> */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          7. Limitation of Liability
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Mistakes or outdated information</li>
          <li>Shipping, customs, or third-party service issues</li>
          <li>
            Any losses or damages related to your use of the site or group order
            participation
          </li>
        </ul>
      </section>

      {/* <!-- Section 8 --> */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          8. Updates to These Terms
        </h2>
        <p>
          We may update these terms from time to time. Any changes will be
          posted here with the updated date.
        </p>
      </section>
    </div>
  );
}
