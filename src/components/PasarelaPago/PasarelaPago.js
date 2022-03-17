import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PasarelaPago = () => {
  return (
    <div>
      <PayPalScriptProvider options={{"client-id": "AQKKANHkrLYsH3HFKRVBPBxKD9ok3PrgAU2M5dfOlWdtctwEFT_1YcgIxhWyMtmPN5k-cPMD8X3wn67j"}}>
          <PayPalButtons style={{layout: "horizontal"}} />
      </PayPalScriptProvider>
    </div>
  );
};

export default PasarelaPago;
