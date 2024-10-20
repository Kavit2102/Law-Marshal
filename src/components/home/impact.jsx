import React from "react";

const ImpactStat = ({ value, label }) => (
  <div className="flex flex-col items-center md:items-start">
    <div className="text-4xl font-bold text-white mb-2">{value}</div>
    <div className="text-sm text-gray-300 text-center md:text-left">
      {label}
    </div>
  </div>
);

const LawMarshalXImpact = () => {
  return (
    <div className="relative [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-white py-16 px-4 overflow-hidden">
      <div className="container md:flex flex-col items-start md:mx-20 relative">
        <h2 className="text-4xl font-bold mb-12">The Spocto X Impact</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          <ImpactStat value="$100 Bn" label="Volume Processed" />
          <ImpactStat value="61 Mn" label="Accounts saved from going to NPA" />
          <ImpactStat value="45+" label="Financial institutions trust us" />
          <ImpactStat value="54 Mn+" label="Happy end-customers" />
          <ImpactStat value="$4 Bn" label="ECL Savings by Spocto" />
          <ImpactStat value="10%" label="Increase in NPS" />
        </div>

        <p className="text-gray-300 text-justify max-w-3xl">
          At Spocto X, we are driving the future of debt collection through
          innovation and strategic foresight. Our integrated product suite
          empowers financial institutions with cutting-edge AI, ML, and
          NLP-driven technologies.
        </p>
      </div>
    </div>
  );
};

export default LawMarshalXImpact;