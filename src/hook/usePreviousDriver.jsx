import { useRouter } from "next/navigation";
import { contextUser } from "@/context/contextUser";

export function usePreviousDriver(driver) {
  const router = useRouter();
  const { isDriverComplete } = contextUser((state) => ({
    isDriverComplete: state.isDriverComplete,
  }));

  const goToPreviousDriver = () => {
    const previousDriver = driver - 1;
    const isPreviousDriverComplete = isDriverComplete(previousDriver);
    if (!isPreviousDriverComplete) {
      router.push(`/dashboard/driver/${previousDriver}`);
    }
  };

  return goToPreviousDriver;
}
