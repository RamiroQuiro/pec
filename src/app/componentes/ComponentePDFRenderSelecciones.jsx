import { Text, View } from "@react-pdf/renderer";
import React from "react";
import { createTw } from "react-pdf-tailwind/dist";

export default function ComponentePDFRenderSelecciones({ title, array }) {
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
  return (
    <View
      style={tw(
        "flex flex-col items-start gap-2 justify-center flex-grow w-full my-5 mx-auto rounded-lg"
      )}
    >
      <Text style={tw("font-bold text-lg text-left text-[#00A1A5]")}>
        {title}
      </Text>
      <View
        style={tw(
          "flex flex-col items-start gap-2 justify-center flex-grow w-11/12 mx-auto rounded-lg "
        )}
      >
        {array.map((label, i) => (
          <Text key={i} style={tw("font-bold text-left text-[#323639] ")}>
            {label.label}
          </Text>
        ))}
      </View>
    </View>
  );
}
