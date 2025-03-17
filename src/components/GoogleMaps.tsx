const GoogleMaps = () => {
  return (
    <div className="w-full h-96 flex justify-center items-center">
      <iframe
        title="Google Maps"
        className="w-full h-full border-0 rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.651588208797!2d-51.227511384556524!3d-30.031253081961844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197062ff04263d%3A0xd92dbfc31c5bcae9!2sRua%20dos%20Andradas%2C%201560%2C%20Centro%20Historico%2C%20Porto%20Alegre%20RS%2C%2090020-000%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1710012345678"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMaps;
