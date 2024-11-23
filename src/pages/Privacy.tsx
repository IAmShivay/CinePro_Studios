import React from 'react';
import { Shield } from 'lucide-react';

const Privacy = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4 gradient-text">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: March 1, 2024</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-gray-400 mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Communication preferences</li>
              <li>Payment information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-gray-400 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-400 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you marketing communications</li>
              <li>Improve our services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
            <p className="text-gray-400">
              We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Security</h2>
            <p className="text-gray-400">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-400">
              If you have any questions about our Privacy Policy, please contact us at privacy@cineprostudios.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Privacy;