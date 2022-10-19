
const URL_INFO = {
  // PAGE URL 정의

  LOGIN_MAIN: { URL: '/login', NAME: '로그인' },
  DASH_BOARD_MAIN: { URL: '/dashboard', NAME: 'Dashboard' },
  MMS: {

  },
  CMS: {
    WEBSITE_CONTENT_MANAGEMENT: {
      BASE: {
        URL: '/cms/websiteContentManagement',
        NAME: 'WebsiteContentManagement'
      },
      CONTENT: {
        BASE : {
          URL: '/cms/websiteContentManagement/contentManagement/',
          NAME: 'contentManagement base Page'
        },
        LIST_PAGE: {
          URL: '/cms/websiteContentManagement/contentManagement/list',
          NAME: 'contentManagement List Page'
        },
        ADD_PAGE: {
          URL: '/cms/websiteContentManagement/contentManagement/addPage',
          NAME: 'contentManagement Add Page'
        },
        DETAIL_PAGE: {
          URL: '/cms/websiteContentManagement/contentManagement/detailPage',
          NAME: 'contentManagement Detail Page'
        }
      },
      CATEGORY: {
        BASE : {
          URL: '/cms/websiteContentManagement/categoryManagement/',
          NAME: 'categoryManagement base Page'
        },
        LIST_PAGE: {
          URL: '/cms/websiteContentManagement/categoryManagement/list',
          NAME: 'categoryManagement List Page'
        },
        ADD_PAGE: {
          URL: '/cms/websiteContentManagement/categoryManagement/addPage',
          NAME: 'categoryManagement Add Page'
        },
        DETAIL_PAGE: {
          URL: '/cms/websiteContentManagement/categoryManagement/detailPage',
          NAME: 'categoryManagement Detail Page'
        }
      },
      OPTION: {
        BASE : {
          URL: '/cms/websiteContentManagement/optionManagement/',
          NAME: 'optionManagement base Page'
        },
        LIST_PAGE: {
          URL: '/cms/websiteContentManagement/optionManagement/list',
          NAME: 'optionManagement List Page'
        },
        ADD_PAGE: {
          URL: '/cms/websiteContentManagement/optionManagement/addPage',
          NAME: 'optionManagement Add Page'
        },
        DETAIL_PAGE: {
          URL: '/cms/websiteContentManagement/optionManagement/detailPage',
          NAME: 'optionManagement Detail Page'
        }
      },
      MENU: {
        BASE : {
          URL: '/cms/websiteContentManagement/menuManagement/',
          NAME: 'menuManagement base Page'
        },
        LIST_PAGE: {
          URL: '/cms/websiteContentManagement/menuManagement/list',
          NAME: 'menuManagement List Page'
        },
        ADD_PAGE: {
          URL: '/cms/websiteContentManagement/menuManagement/addPage',
          NAME: 'menuManagement Add Page'
        },
        DETAIL_PAGE: {
          URL: '/cms/websiteContentManagement/menuManagement/detailPage',
          NAME: 'menuManagement Detail Page'
        }
      },
      MAIN: {
        BASE : {
          URL: '/cms/websiteContentManagement/mainPageManagement/',
          NAME: 'mainPageManagement base Page'
        },
        LIST_PAGE: {
          URL: '/cms/websiteContentManagement/mainPageManagement/list',
          NAME: 'mainPageManagement List Page'
        },
        ADD_PAGE: {
          URL: '/cms/websiteContentManagement/mainPageManagement/addPage',
          NAME: 'mainPageManagement Add Page'
        },
        DETAIL_PAGE: {
          URL: '/cms/websiteContentManagement/mainPageManagement/detailPage',
          NAME: 'mainPageManagement Detail Page'
        }
      }
    },

    INTEGRATED_SERVICE_MANAGEMENT : {
      BASE:{
        URL: '/cms/service',
        NAME: 'TravelContentManagement'
      },
      CONTENT: {
        BASE : {
          URL: '/cms/service/travelContentManagement/',
          NAME: 'TravelContentManagement base Page'
        },
        LIST_PAGE: {
          URL: '/cms/service/travelContentManagement/list',
          NAME: 'TravelContentManagement List Page',
        },
        ADD_PAGE: {
          URL: '/cms/service/travelContentManagement/add',
          NAME: 'TravelContentManagement Add Page',
        },
        DETAIL_PAGE: {
          URL: '/cms/service/travelContentManagement/detail',
          NAME: 'TravelContentManagement Detail Page',
        }
      }
    },
  },
  // API URL 정의
  API_MMS: {
    DEPARTMENT: {
      GET_LIST: '/api/department/list'
    }
  },
  API_CMS: {
    ENUM_URL: '/api/cms/enum',
    WEBSITE_MANAGEMENT: {
      PRODUCT_TYPE: '/api/homepage/homepageContent',
    },
    TRAVEL_CONTENT: '/api/homepage/homepageTravelContent',
  },
  API_INTERFACE: {
    TRANSLATE: '/api/interface/google/translate',
  },
  API_V2: {
    LOGIN_URL: '/api/login',
    LOGOUT_URL: '/api/login',
    NOTIFICATION: {
      CREATE_EVENT_STREAM: `/api/message/notice-message/create-event-stream-by-user-id`,
      GET_NOTIFICATION_LIST: `/api/message/notice-message/get-event-list`,
      ADD_NOTIFICATION: `/api/message/notice-message/create-event-by-user-id`,
      READ_EVENT: `/api/message/notice-message/read-event`,
    },
    SSE: '/api/sample/notice-message/create-event-stream-by-user-id?userId=test',
    //EXCEL 업로드
    EXCEL_UPLOAD:  '/api/sample/excelUpload',
  },
};

export default URL_INFO;
