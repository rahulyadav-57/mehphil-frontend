import { useApiClient } from "@/hooks";
import { AxiosResponse } from "axios";

export { useEventActions };

function useEventActions() {
  const ApiClient = useApiClient();

  return {
    create,
    list,
    show,
    bookTicket,
  };

  async function create(data: any): Promise<AxiosResponse> {
    return ApiClient.post("/meetup", data);
  }
  async function bookTicket(
    eventId: string,
    data: any
  ): Promise<AxiosResponse> {
    return ApiClient.post(`/meetup/${eventId}/book`, data);
  }
  async function list(data: any = {}): Promise<AxiosResponse> {
    return ApiClient.get("/meetup", data);
  }
  async function show(id: string): Promise<AxiosResponse> {
    return ApiClient.get(`/meetup/${id}`);
  }
}
