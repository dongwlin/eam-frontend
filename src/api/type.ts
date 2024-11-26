import { AxiosResponse } from "axios"

export type Resp<T> = Promise<AxiosResponse<T>>

export interface GetVersionResp {
  maa_version: string
  eam_version: string
  go_version: string
  build_at: string
}