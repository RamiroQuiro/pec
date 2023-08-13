import { create } from "zustand";

export const contextUser = create((set, get) => ({
  userData: {},
  formCarga: {},
  comprobantePago: null,
  drivers: {
    driver1: {
      step1: true,
      step2: true,
      step3: false,
      step4: false,
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
  },
  currentDriver: 1,
  currentStep: 1,
  subPantallas: 0,
  flyerActivo: 0,

  // funciones para actualizar estados
  updateState: (obj) => {
    set((state) => ({
      ...state,
      ...obj,
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
  activeStep: (obj) => {
    let name = Object.keys(obj);
    let values = Object.values(obj);
    set((state) => ({
      ...state,
      user: { ...state.user, [name]: { ...values[0] } },
    }));
  },
}));
