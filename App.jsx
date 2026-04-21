import React, { useState } from 'react';

export default function TeacherWebsite() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: '',
    time: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      setStatus('Please fill in your name and phone number');
      return;
    }

    setIsSubmitting(true);
    setStatus('Sending your booking request...');

    // Simulate API call (replace with Formspree, EmailJS, or your backend later)
    setTimeout(() => {
      setStatus('✅ Booking request sent successfully! Josphat will contact you shortly via WhatsApp or call.');
      setFormData({ name: '', phone: '', grade: '', time: '' });
      setIsSubmitting(false);
      
      // Auto-clear success message after 8 seconds
      setTimeout(() => setStatus(''), 8000);
    }, 1800);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white p-4 md:p-8 font-sans'>
      <div className='max-w-4xl mx-auto space-y-8 md:space-y-12'>
        
        {/* Header */}
        <header className='bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-14 text-center border border-white/20'>
          <div className='relative mx-auto w-44 h-44 md:w-64 md:h-64 mb-8'>
            <img 
              src='https://via.placeholder.com/400x400/1e3a8a/ffffff?text=Josphat+Mbugua' 
              alt='Josphat Mbugua - Mathematics Teacher' 
              className='w-full h-full rounded-full object-cover border-4 border-yellow-400 shadow-2xl ring-2 ring-blue-400/50'
            />
          </div>

          <h1 className='text-4xl md:text-6xl font-extrabold tracking-tighter mb-2'>
            Josphat Mbugua
          </h1>
          <p className='text-2xl md:text-3xl text-blue-300 font-medium'>
            Mathematics Teacher & Tutor
          </p>
          <p className='mt-4 text-slate-300 max-w-lg mx-auto text-lg'>
            Personalized KCSE & Grade 7-10 Mathematics tuition with proven results.
          </p>

          <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'>
            <a 
              href='https://wa.me/254706197908' 
              target='_blank'
              rel='noopener noreferrer'
              className='bg-green-600 hover:bg-green-500 transition-all px-10 py-4 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-3 text-lg active:scale-95'
            >
              💬 WhatsApp Me
            </a>
            
            <a 
              href='#booking' 
              className='bg-yellow-400 hover:bg-yellow-300 text-slate-900 transition-all px-10 py-4 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-3 text-lg active:scale-95'
            >
              Book a Lesson
            </a>
          </div>
        </header>

        {/* Trust Bar */}
        <div className='bg-yellow-400 text-slate-900 py-4 px-6 rounded-2xl text-center font-black uppercase tracking-widest shadow-xl text-sm md:text-base'>
          ✅ Trusted Tutor • Excellent Results • Exam-Focused Teaching
        </div>

        {/* Info Grid */}
        <section className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {[
            { 
              title: 'Subjects', 
              content: 'Mathematics, Algebra, Geometry, Statistics, Exam Revision (KCSE)' 
            },
            { 
              title: 'Locations', 
              content: 'Karen • Ongata Rongai • Ngong • Online (Zoom/WhatsApp)' 
            },
            { 
              title: 'Resources', 
              content: 'Free Notes • Past Papers • Revision Booklets • Mock Exams' 
            }
          ].map((item, i) => (
            <div 
              key={i} 
              className='bg-white/5 border border-white/10 p-7 rounded-3xl hover:bg-white/10 hover:border-yellow-400/30 transition-all duration-300 group'
            >
              <h3 className='font-bold text-yellow-400 text-xl mb-3 group-hover:text-yellow-300'>{item.title}</h3>
              <p className='text-slate-200 leading-relaxed'>{item.content}</p>
            </div>
          ))}
        </section>

        {/* Two Column Section */}
        <div className='grid md:grid-cols-2 gap-6'>
          {/* Why Learn With Me */}
          <section className='bg-white/5 p-8 rounded-3xl border border-white/10'>
            <h2 className='text-3xl font-bold mb-6 text-blue-300'>Why Learn With Me?</h2>
            <ul className='space-y-4'>
              {[
                'Clear, step-by-step explanations',
                'Intensive past paper practice',
                'Individualized attention',
                'Proven strategies for KCSE success',
                'Regular progress tracking'
              ].map((text, i) => (
                <li key={i} className='flex items-start gap-4 text-lg'>
                  <span className='text-green-400 text-2xl leading-none mt-0.5'>✓</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* M-Pesa Payment */}
          <section className='bg-white/5 p-8 rounded-3xl border border-white/10'>
            <h2 className='text-3xl font-bold mb-6 text-blue-300'>M-Pesa Payment</h2>
            <div className='bg-slate-900/70 p-8 rounded-2xl border border-yellow-400/20'>
              <p className='text-slate-400 uppercase text-sm font-medium tracking-widest mb-2'>Pay Bill / Till Number</p>
              <p className='text-5xl font-mono font-bold text-yellow-400 tracking-wider'>0706197908</p>
              <p className='mt-3 text-lg font-medium'>Account Name: <span className='text-white'>Josphat Mbugua</span></p>
              
              <button 
                onClick={() => {
                  navigator.clipboard.writeText('0706197908');
                  alert('Phone number copied!');
                }}
                className='mt-6 w-full bg-white/10 hover:bg-white/20 transition-colors py-3 rounded-2xl text-sm font-medium'
              >
                📋 Copy Number
              </button>
            </div>
          </section>
        </div>

        {/* Booking Form */}
        <section id='booking' className='bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border border-blue-500/30'>
          <div className='text-center mb-10'>
            <h2 className='text-4xl font-bold mb-3'>Book Your Lesson</h2>
            <p className='text-slate-300 text-lg'>
              Fill the form below and I'll contact you within 2 hours to confirm your slot.
            </p>
          </div>

          <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <input 
              required
              type='text'
              placeholder='Full Name'
              className='p-5 rounded-2xl bg-slate-900 border border-white/20 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all text-lg'
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            
            <input 
              required
              type='tel'
              placeholder='Phone Number (WhatsApp preferred)'
              className='p-5 rounded-2xl bg-slate-900 border border-white/20 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all text-lg'
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />

            <input 
              type='text'
              placeholder='Class / Grade (e.g. Form 3, Grade 9)'
              className='p-5 rounded-2xl bg-slate-900 border border-white/20 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all text-lg'
              value={formData.grade}
              onChange={(e) => setFormData({...formData, grade: e.target.value})}
            />

            <input 
              type='text'
              placeholder='Preferred Day & Time'
              className='p-5 rounded-2xl bg-slate-900 border border-white/20 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 outline-none transition-all text-lg'
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
            />

            <button 
              type='submit'
              disabled={isSubmitting}
              className='md:col-span-2 mt-4 bg-yellow-400 hover:bg-yellow-300 disabled:bg-yellow-600 text-slate-950 py-5 rounded-2xl font-black text-2xl transition-all active:scale-[0.97] shadow-xl disabled:cursor-not-allowed'
            >
              {isSubmitting ? 'Sending...' : 'Confirm My Booking'}
            </button>

            {status && (
              <p className={`md:col-span-2 text-center font-semibold text-lg py-3 rounded-2xl ${
                status.includes('✅') ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'
              }`}>
                {status}
              </p>
            )}
          </form>
        </section>

        <footer className='text-center text-slate-500 pt-6 pb-12 text-sm'>
          © {new Date().getFullYear()} Josphat Mbugua • Elite Mathematics Academy • Nairobi, Kenya
        </footer>
      </div>
    </div>
  );
}
