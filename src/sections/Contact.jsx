import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = ({ target: { name, value }}) => {
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                'service_5k3oqmh', 
                'template_z8r82wk', 
                {
                    from_name: form.name,
                    to_name: 'Nico',
                    from_email: form.email,
                    to_email: 'nicojayolano@gmail.com',
                    message: form.message + " - " + form.email,
                },
                'hVVERS1eFaN2PhbRt'
            );
            setLoading(false);

            alert("Your message has been sent.");

            setForm({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            setLoading(false);

            console.log(error);

            alert("Something went wrong.");
        }

        
    };

  return (
    <section id="contact" className="c-space my-20">
        <div className="relative min-h-screen flex items-center justify-center flex-col">
            <img src="assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen"/>

            <div className="contact-container">
                <h3 className="head-text">
                    Let&apos;s Talk
                </h3>
                <p className="text-lg text-white-600 mt-3">
                    I&apos;m looking forward working with you!
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                    <label className='space-y-3'>
                        <span className="field-label">Full Name</span>

                        <input 
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="field-input"
                            required
                        />
                    </label>
                    <label className='space-y-3'>
                        <span className="field-label">Email</span>

                        <input 
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="field-input"
                            required
                        />
                    </label>
                    <label className='space-y-3'>
                        <span className="field-label">Your Message</span>

                        <textarea 
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Hi, I wanna give you a..."
                            className="field-input"
                            rows={5}
                            required
                        />
                    </label>

                        <button type="submit" className="field-btn" disabled={loading}>
                        {loading ? 'sending...' : 'Send Message'}

                            <img src="assets/arrow-up.png" alt="arrow" className="field-btn_arrow"/>
                        </button>

                </form>
            </div>
        </div>
        
    </section>
  )
}

export default Contact