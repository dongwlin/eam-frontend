import request from '@/request'
import { GetVersionResp, Resp } from './type'

export const getVersions = (): Resp<GetVersionResp> => {
  return request.get('/versions')
}