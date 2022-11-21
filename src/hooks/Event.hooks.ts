import { useApiClient } from "@/hooks";
import { AxiosResponse } from "axios";

export { useEventActions };

function useEventActions() {
  const ApiClient = useApiClient();

  return {
    create,
  };

  async function create(data: any): Promise<AxiosResponse> {
    return ApiClient.post("/meetup", data);
  }
}
