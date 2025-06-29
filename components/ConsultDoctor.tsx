
import doctor from "@/public/doctor.png"

function ConsultDoctorSection() {
  return (
    <section className="py-12  px-4 md:px-8">
      <div className="bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center overflow-hidden">
        {/* Left: Doctor Details */}
        <div className="flex-1 p-8 flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D12391] mb-2">
            Consult with our Doctor
          </h2>
          <p className="text-lg font-semibold text-gray-800 mb-1">
            Dr. Akhilesh Sahu
          </p>
          <p className="text-[#D12391] font-medium mb-1">
            Cancer Specialist
          </p>
           <p className="text-[#D12391] font-medium mb-4">
           +91 70003 35263
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="tel:+917000335263"
              className="flex items-center gap-2 px-4 py-2 bg-[#D12391] text-white rounded-full font-medium shadow hover:bg-[#b81c77] transition"
            >
              <span role="img" aria-label="phone">📞</span> Call
            </a>
            <a
              href="https://wa.me/+917000335263"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full font-medium shadow hover:bg-green-600 transition"
            >
              <span role="img" aria-label="whatsapp">🟢</span> WhatsApp
            </a>
          </div>
        </div>
        {/* Right: Doctor Image */}
        <div className="flex-1 flex justify-center items-center  h-full p-8">
          <img
            src={doctor.src}
            alt="Dr. Akhilesh Sahu"
            className="w-68 h-64 object-cover rounded-2xl "
          />
        </div>
      </div>
    </section>
  );
}

export default ConsultDoctorSection;