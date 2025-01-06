import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import Globe from "react-globe.gl";
import EarthCanvas from "../components/Earth";

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
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 flex flex-col justify-center items-center p-8 relative">
                <div className="relative z-10 text-white">
                    <h3 className="head-text text-4xl font-bold mb-4">Let&apos;s Talk</h3>
                    <p className="text-lg text-gray-300 mb-6">I&apos;m looking forward to working with you!</p>
                <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col space-y-6 w-full max-w-md">
                    <label className="flex flex-col">
                        <span className="field-label text-sm font-semibold mb-2">Full Name</span>
                        <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="field-input bg-gray-700 text-white p-3 rounded"
                        required
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="field-label text-sm font-semibold mb-2">Email</span>
                        <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="field-input bg-gray-700 text-white p-3 rounded"
                        required
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="field-label text-sm font-semibold mb-2">Your Message</span>
                        <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Hi, I wanna give you a..."
                        className="field-input bg-gray-700 text-white p-3 rounded"
                        rows={2}
                        required
                        />
                    </label>
                    <button
                        type="submit"
                        className="field-btn bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>

    {/* Globe Section */}
    <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
    </div>
  </div>
</section>

  )
}

export default Contact