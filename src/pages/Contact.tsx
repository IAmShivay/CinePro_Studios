import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Here you would typically send the data to your backend
      console.log(data);
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send message');
    }
  };

  return (
    <main className="pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Contact Us</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a question or want to work with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 p-8 rounded-xl hover-card">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-red-500" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-400">contact@cineprostudios.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-red-500" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-red-500" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-400">123 Studio Way, Hollywood, CA 90028</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-xl hover-card">
              <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
              <div className="space-y-2">
                <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  {...register('name')}
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  {...register('subject')}
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-black border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;