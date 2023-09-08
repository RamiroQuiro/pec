import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email es requerido"],
    unique: true,
  },
  password: {
    type: String,
    select: false, //para que no -e devuelva en el objeto de la coleccion.
    require: [true, "El Password es requerido"],
  },
  fullName: {
    type: String,
    require: [true, "El nombre completo es requerido"],
    maxLength: [25, "Maximo 25 Caracteres"],
  },
  status: {
    type: String,
    default: "UNVERIFIED",
  },
  pecPagado:{
    type: Boolean,
    default: false,
  },
  sessionPaid: {
    type: String,
    default: "0",
  },
  drivers: {
    driver1: {
      step1: {
        type: Boolean,
        default: false,
      },
      step2: {
        type: Boolean,
        default: false,
      },
      step3: {
        type: Boolean,
        default: false,
      },
      step4: {
        type: Boolean,
        default: false,
      },
    },
    driver2: {
      step1: {
        type: Boolean,
        default: false,
      },
      step2: {
        type: Boolean,
        default: false,
      },
      step3: {
        type: Boolean,
        default: false,
      },
      step4: {
        type: Boolean,
        default: false,
      },
    },
    driver3: {
      step1: {
        type: Boolean,
        default: false,
      },
      step2: {
        type: Boolean,
        default: false,
      },
      step3: {
        type: Boolean,
        default: false,
      },
      step4: {
        type: Boolean,
        default: false,
      },
    },
    driver4: {
      step1: {
        type: Boolean,
        default: false,
      },
      step2: {
        type: Boolean,
        default: false,
      },
      step3: {
        type: Boolean,
        default: false,
      },
      step4: {
        type: Boolean,
        default: false,
      },
    },
    driver5: {
      step1: {
        type: Boolean,
        default: false,
      },
      step2: {
        type: Boolean,
        default: false,
      },
      step3: {
        type: Boolean,
        default: false,
      },
      step4: {
        type: Boolean,
        default: false,
      },
    },
    driver6: {
      step1: {
        type: Boolean,
        default: false,
      },
      step2: {
        type: Boolean,
        default: false,
      },
      step3: {
        type: Boolean,
        default: false,
      },
      step4: {
        type: Boolean,
        default: false,
      },
    },
    driver7: {
      step1: {
        type: Boolean,
        default: false,
      },
      step2: {
        type: Boolean,
        default: false,
      },
      step3: {
        type: Boolean,
        default: false,
      },
      step4: {
        type: Boolean,
        default: false,
      },
    },
    driver8: {
      step1: {
        type: Boolean,
        default: false,
      },
      step2: {
        type: Boolean,
        default: false,
      },
      step3: {
        type: Boolean,
        default: false,
      },
      step4: {
        type: Boolean,
        default: false,
      },
    },
    driver9: {
      step1: {
        type: Boolean,
        default: false,
      },
      step2: {
        type: Boolean,
        default: false,
      },
      step3: {
        type: Boolean,
        default: false,
      },
      step4: {
        type: Boolean,
        default: false,
      },
    },
    driver10: {
      step1: {
        type: Boolean,
        default: false,
      },
      step2: {
        type: Boolean,
        default: false,
      },
      step3: {
        type: Boolean,
        default: false,
      },
      step4: {
        type: Boolean,
        default: false,
      },
    },
  },
  formCarga:{
    videoBienvenida: {
      type: Boolean,
      default: false,
    },
    driver1:{
      type:Object,
    },
    driver2:{
      type:Object,
    },
    driver3:{
      type:Object,
    },
    driver4:{
      type:Object,
    },
    driver5:{
      type:Object,
    },
    driver6:{
      type:Object,
    },
    driver7:{
      type:Object,
    },
    driver8:{
      type:Object,
    },
    driver9:{
      type:Object,
    },
    driver10:{
      type:Object,
    },
  },
  entregables: {
    pdfDriver1: Buffer,
    pdfDriver2: Buffer,
    pdfDriver3: Buffer,
    pdfDriver4: Buffer,
    pdfDriver5: Buffer,
    pdfDriver6: Buffer,
    pdfDriver7: Buffer,
    pdfDriver8: Buffer,
    pdfDriver9: Buffer,
    pdfDriver10: Buffer,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
