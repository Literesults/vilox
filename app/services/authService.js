import { apiWithAuth, apiWithOutAuth, getApiResponse, getErrorResponse } from "./httpService";

export const Applogin = (formData) => apiWithOutAuth.post("admin_login", formData).then(getApiResponse).catch(getErrorResponse);
export const sendOTP = (formData) => apiWithOutAuth.post("/recover/send_otp", formData).then(getApiResponse).catch(getErrorResponse);
export const resendOTP = (formData) => apiWithOutAuth.post("/recover/resend_otp", formData).then(getApiResponse).catch(getErrorResponse);
export const verifyOTP = (formData) => apiWithOutAuth.post("/recover/verify_otp", formData).then(getApiResponse).catch(getErrorResponse);
export const createNewPassword = (formData) => apiWithOutAuth.post("/recover/create_new_password", formData).then(getApiResponse).catch(getErrorResponse);

export const addGiftCardCategory = (formData) => apiWithAuth.post("admin/giftcard/add_giftcard_category", formData).then(getApiResponse).catch(getErrorResponse);
export const updateGiftCardCategory = (formData) => apiWithAuth.post("admin/giftcard/update_giftcard_category", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchGiftCardCategory = (formData) => apiWithAuth.post("admin/giftcard/fetch_card_category", formData).then(getApiResponse).catch(getErrorResponse);
export const changeGiftCardStatus = (formData) => apiWithAuth.post("admin/giftcard/change_giftcard_status", formData).then(getApiResponse).catch(getErrorResponse);


export const addCrypto = (formData) => apiWithAuth.post("admin/crypto/add_crypto", formData).then(getApiResponse).catch(getErrorResponse);
export const updateCrypto = (formData) => apiWithAuth.post("admin/crypto/update_crypto", formData).then(getApiResponse).catch(getErrorResponse);
export const fetchCrypto = (formData) => apiWithAuth.post("admin/crypto/fetch_crypto", formData).then(getApiResponse).catch(getErrorResponse);