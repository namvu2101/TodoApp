
import { IMS_IMAGE } from './ims'
import {imgStr} from './type'
import {appSetting} from '@assets'

// export const AppImage = (nameImg: imgStr) => {
//   let bundleId = DeviceInfo.getBundleId()

//   const piAsahi = MUL_BUNDLE_ID.asahi
//   const piBdc = MUL_BUNDLE_ID.bdc
//   switch (bundleId) {
//     case piAsahi:
//       return ASAHI_IMAGE[nameImg]
//     case piBdc:
//       return BDC_IMAGE[nameImg]
//     default:
//       return BDC_IMAGE[nameImg]
//   }
// }
export const AppImage = (nameImg: imgStr) => {
  let keyApp = appSetting.getUpKeyApp()
  if (keyApp === 'ims') return IMS_IMAGE[nameImg]
  if (keyApp === 'bdc') return BDC_IMAGE[nameImg]
  return ASAHI_IMAGE[nameImg]
}
