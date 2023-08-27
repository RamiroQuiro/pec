import { Text, View, Svg, Path } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Comic Sans"],
    },
    extend: {
      colors: {
        custom: "#bada55",
      },
    },
  },
});

export default function FooterPDF() {
  return (
    <View
      style={tw(
        "absolute bottom-2 w-full mx-auto  h-20 left-0 flex flex-row items-center justify-center px-10 gap-10"
      )}
    >
      <View
        style={tw(
          " left-0 flex h-20 flex-row items-center justify-center gap-3"
        )}
      >
        <Svg
          style={tw("   h-12 w-12 bg-[#00A1A5] rounded-full")}
          fill="#fff"
          viewBox="0 0 24 24"
          id="phone-square"
          p
          data-name="Flat Color"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            id="secondary"
            d="M17.92,14.49A2.4,2.4,0,0,0,16.72,13c-.23-.12-.44-.24-.65-.37a2.38,2.38,0,0,0-3.22.63l-.71,1a13.52,13.52,0,0,1-2.39-2.39l1-.7a2.39,2.39,0,0,0,.63-3.23c-.13-.21-.25-.42-.37-.65a2.4,2.4,0,0,0-1.51-1.2,2.43,2.43,0,0,0-1.93.31l-.66.44a1.79,1.79,0,0,0-.87,2h0a10.25,10.25,0,0,0,1.46,3.33h0a13.26,13.26,0,0,0,1.94,2.38,13.26,13.26,0,0,0,2.38,1.94h0A10.34,10.34,0,0,0,15.19,18a2.18,2.18,0,0,0,.43.05,1.84,1.84,0,0,0,1.55-.92h0l.44-.66A2.43,2.43,0,0,0,17.92,14.49Z"
            style="fill: #00A1A5;"
          ></Path>
        </Svg>
        <Text
          style={tw("font-bold text-left text-[#00699C] font-medium text-base")}
        >
          3856771992
        </Text>
      </View>
      <View
        style={tw(
          " left-0 flex h-20  flex-row items-center justify-center  gap-3"
        )}
      >
        <Svg
          style={tw("   h-12 w-12 bg-[#04A9BE]  rounded-full ")}
          fill="#fff"
          height="80px"
          width="80px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          {" "}
          <Path d="M460.245,64H51.733C23.156,64,0,87.168,0,115.755v280.491C0,424.833,23.156,448,51.733,448h408.512 C488.822,448,512,424.833,512,396.245V115.755C512,87.167,488.822,64,460.245,64z M281.229,246.889 c-14.357,13.044-36.113,13.044-50.377,0.084L74.591,106.667h362.804L281.229,246.889z M42.667,135.344l105.065,94.338 L42.667,369.769V135.344z M179.603,258.299l22.65,20.337c30.443,27.66,77.039,27.66,107.575-0.084l22.557-20.254L442.66,405.333 H69.327L179.603,258.299z M364.255,229.682l105.078-94.35v234.454L364.255,229.682z"></Path>
        </Svg>
        <Text
          style={tw("font-bold text-left text-[#00699C] font-medium text-base")}
        >
          hector.avila@kreativium.mx
        </Text>
      </View>
    </View>
  );
}
