import React from 'react';
import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FileText className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4 gradient-text">Terms and Conditions</h1>
          <p className="text-gray-400">Last updated: March 1, 2024</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-400">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p className="text-gray-400 mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on CinePro Studios's website for personal, non-commercial transitory viewing only.
            </p>
            <p className="text-gray-400">This license shall automatically terminate if you violate any of these restrictions and may be terminated by CinePro Studios at any time.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
            <p className="text-gray-400">
              The materials on CinePro Studios's website are provided on an 'as is' basis. CinePro Studios makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
            <p className="text-gray-400">
              In no event shall CinePro Studios or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CinePro Studios's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Contact Information</h2>
            <p className="text-gray-400">
              If you have any questions about these Terms and Conditions, please contact us at legal@cineprostudios.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Terms;