import axios from "axios";
import { ErrorIcon } from "react-hot-toast";
import { create } from "zustand";

export const contextUser = create((set, get) => ({
  userData: {},
  formCarga: {
    videoBienvenida:false,
    driver1: {},
    driver2: {},
    driver3: {},
    driver4: {},
    driver5: {
      formulario1:{
        periodos:[]
      },
      formulario2: {
        acciones: [
          {
            accion: 1,
            name: "",
            fechaInicio: "",
            fechaSalida: "",
            state: false,
          },
          {
            accion: 2,
            name: "",
            fechaInicio: "",
            fechaSalida: "",
            state: false,
          },
          {
            accion: 3,
            name: "",
            fechaInicio: "",
            fechaSalida: "",
            state: false,
          },
          {
            accion: 4,
            name: "",
            fechaInicio: "",
            fechaSalida: "",
            state: false,
          },
          {
            accion: 5,
            name: "",
            fechaInicio: "",
            fechaSalida: "",
            state: false,
          },
        ],
      },
      formulario3: {
        acciones: [
          {
            accion: 1,
            name: "",
            fechaInicio: "",
            fechaSalida: "",
            state: false,
          },
          {
            accion: 2,
            name: "",
            fechaInicio: "",
            fechaSalida: "",
            state: false,
          },
          {
            accion: 3,
            name: "",
            fechaInicio: "",
            fechaSalida: "",
            state: false,
          },
          {
            accion: 4,
            name: "",
            fechaInicio: "",
            fechaSalida: "",
            state: false,
          },
          {
            accion: 5,
            name: "",
            fechaInicio: "",
            fechaSalida: "",
            state: false,
          },
        ],
      },
      formulario4: {
        acciones: [
          {
            accion: 1,
            name: "",
            fechaInicio: "",
            fechaSalida: "",
            state: false,
          },
          {
            accion: 2,
            name: "",
            fechaInicio: "",
            fechaSalida: "",
            state: false,
          },
          {
            accion: 3,
            name: "",
            fechaInicio: "",
            fechaSalida: "",
            state: false,
          },
          {
            accion: 4,
            name: "",
            fechaInicio: "",
            fechaSalida: "",
            state: false,
          },
          {
            accion: 5,
            name: "",
            fechaInicio: "",
            fechaSalida: "",
            state: false,
          },
        ],
      }
    },
    driver6: {},
    driver7: {},
    driver8: {},
    driver9: {},
    driver10: {},
  },
  comprobantePago: null,
  drivers: {
    driver1: {
      step1: true,
      step2: true,
      step3: true,
      step4: true,
    },
    driver2: {
      step1: false,
      step2: false,
      step3: false,
      step4: false,
    },
    driver3: {
      step1: false,
      step2: false,
      step3: false,
      step4: false,
    },
    driver4: {
      step1: false,
      step2: false,
      step3: false,
      step4: false,
    },
    driver5: {
      step1: false,
      step2: false,
      step3: false,
      step4: false,
    },
    driver6: {
      step1: false,
      step2: false,
      step3: false,
      step4: false,
    },
    driver7: {
      step1: false,
      step2: false,
      step3: false,
      step4: false,
    },
    driver8: {
      step1: false,
      step2: false,
      step3: false,
      step4: false,
    },
    driver9: {
      step1: false,
      step2: false,
      step3: false,
      step4: false,
    },
    driver10: {
      step1: false,
      step2: false,
      step3: false,
      step4: false,
    },
  },
  currentDriver: 1,
  currentStep: 1,
  subPantallas: 0,
  flyerActivo: 0,

  // funciones para actualizar estados
  updateState: async (obj) => {
    set((state) => ({
      ...state,
      ...obj,
    }));
    try {
      const { formCarga, userData, drivers } = get();
      const res = await axios.post("/api/guardarDatos", {
        email: userData?.email,
        drivers,
        formCarga,
      });

      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
  updateDataDriver: async (driver, name, obj) => {
    set((state) => ({
      ...state,
      formCarga: {
        [driver]: {
          ...state.formCarga[driver],
          [name]: obj,
        },
      },
    }));
  },
  // Agregar esta función en tu contexto zustand
  isDriverComplete: (driverNumber) => {
    const driver = get().drivers[`driver${driverNumber}`];
    return Object.values(driver).every((step) => step);
  },
  cargarComprobante: (id) => {
    set((state) => ({
      ...state,
      comprobantePago: id,
    }));
  },
  cargarUserData: (obj) => {
    set((state) => ({
      ...state,
      userData: obj,
    }));
  },
  cargarForm: (obj) => {
    set((state) => ({ ...state, formCarga: obj }));
  },
  activarFlyer: (id) => {
    set((state) => ({ ...state, flyerActivo: id }));
  },
  cargarSubPantallas: (id) => {
    set((state) => ({ ...state, subPantallas: id }));
  },
  setCurrentStep: (number) => {
    set((state) => ({ ...state, currentStep: number }));
  },
  activeStep: async (obj) => {
    try {
      let name = Object.keys(obj);
      let values = Object.values(obj);
      set((state) => ({
        ...state,
        drivers: { ...state.drivers, [name]: { ...values[0] } },
      }));
      const { formCarga, userData, drivers } = get();
      const res = await axios.post("/api/guardarDatos", {
        email: userData?.email,
        drivers,
        formCarga,
      });
    } catch (error) {
      console.log(error);
    }
  },
}));
