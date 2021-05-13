const API_ROOT = 'http://localhost:8000/api';

export const APIUrls = {
  loginVendor: () => `${API_ROOT}/vendor/login`,
  getVendor: () => `${API_ROOT}/vendor/vendorInfo`,
 Vendorsignup:()=> `${API_ROOT}/vendor/signUp`,
  VendorLogout:()=> `${API_ROOT}/vendor/logout`,
  getallProduct:()=> `${API_ROOT}/vendor/getallProduct`,
  orderProduct:()=> `${API_ROOT}/vendor/orderProduct`,
  updateVendor:()=> `${API_ROOT}/vendor/updataVendor`
};
