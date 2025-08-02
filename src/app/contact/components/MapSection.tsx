export default function MapSection() {
  return (
    <div className="w-full h-[600px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d316.75395566725376!2d106.88694851476272!3d48.07279829352884!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2smn!4v1754102102295!5m2!1sen!2smn"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
