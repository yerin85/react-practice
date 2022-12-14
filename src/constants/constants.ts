const CONSTANTS = {
  PROJECT_NAME: 'BLUE WINGS',
  LAYOUT_PREFIX: '/main',
  API_MMS_BASE_URL: process.env.REACT_APP_API_MMS_BASE_URL,
  API_CMS_BASE_URL: process.env.REACT_APP_API_CMS_BASE_URL,
  API_INTERFACE_BASE_URL: process.env.REACT_APP_API_INTERFACE_BASE_URL,
  API_V1_FILE_STORAGE_BASE_URL:
    process.env.REACT_APP_API_V1_FILE_STORAGE_BASE_URL,

  LOGIN_CHECK_TIME: 30, //min

  FILE_STORAGE_USER_ID: process.env.REACT_APP_FILE_STORAGE_USER_ID,
  FILE_STORAGE_BUCKET_NAME: process.env.REACT_APP_FILE_STORAGE_BUCKET_NAME,
};

export default CONSTANTS;
