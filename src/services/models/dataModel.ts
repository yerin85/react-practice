
export interface ResponseData<T> {
  resultCode: string;
  message: string;
  data: T;
}

export interface LoginData {
  username: string;
  password: string;
}

export interface UserData {
  userId: string;
  userName: string;
  regDate: string;
  updDate: string;
  userProfile: string;
}

export interface PagingInfo {
  size?: number;
  page?: number;
  sort?: string;
  totalPages?: number;
  totalElements?: number;
}

export interface BoardSearchData {
  title?: string;
}

export interface TranslateText {
  korText: string;
  engText: string;
  chiText: string;
  jpnText: string;
}

export interface MediaContainer<T> {
  id: number;
  fileContent: T;
  mimeType: string;
}

export interface FileContent {
  originalFileName: string;
  fileInfo: FileInfo,
  imageInfo: ImageContent,
  thumbnails: ThumbnailsInfo[]
}

export interface FileInfo {
  fileName: string,
  fileSize: number,
  uri: string
}

export interface ImageContent {
  imageWidth: number;
  imageHeight: number;
}

export interface ThumbnailsInfo {
  type: string,
  fileInfo: FileInfo
}

export interface BaseType {
  // History Information
  createDate: string;               // "2022-01-05 15:00:00",
  createUser: UserType | null;
  updateDate: string;              // "2022-01-05 15:00:00",
  updateUser: UserType | null;
}

export interface HomepageDisplay extends BaseType{
  webUseYn?: boolean;
  appUseYn?: boolean;
}

// WebsiteContentManagement
export interface CMSContentType extends HomepageDisplay {
  id: number;

  // Content Information
  title: TranslateText;
  subTitle: TranslateText;
  description: TranslateText;
  salesDate: DateType;
  cost: TranslateText;
  images?: MediaContainer<FileContent>[];
  imagesErrorMessage?: string;
  contentOpenYn: boolean;
  contentType: HomepageContentType;
  contentDate: DateType;
  specialYn: boolean;
  specialType: HomepageContentSpecialType;
  specialDate: DateType;

  room?: RoomBase;

  // Option Information
  options?: CMSOptionsType[]

  // Online Reservation Information
  onlineReserveYn: boolean;
  reserveType: HomepageReserveType;
  department?: Department;
  // reservationProduct?: ReservationProduct;
  urlLink: string;
  inquiryTypes?: HomepageInquiryType[];
}

export type HomepageContentType = 'PRODUCTION' | 'ROOM' | 'STORE' | 'DESCRIPTION';
export type HomepageContentSpecialType = 'SPECIAL' | 'MD_PICK' | 'NEW';
export type HomepageReserveType = 'FACILITIES' | 'URL' | 'INQUIRY';
export type HomepageInquiryType = 'NAME' | 'TEL' | 'EMAIL' | 'RESERVATION_DATE' | 'REQUIREMENT';

export interface ReservationProduct {
  id: number;
  department?: Department;
  name?: string;
  periodDate?: DateType;
  noReservationCode?: string[];
  noReservations?: Date[];
  timeStart?: Date;
  timeEnd?: Date;
  timeDirectYn?: boolean;
  timeDates?: Date[];
  timeDuration?: number;
  timeCount?: number;
  personCode?: string[];
  maxPersonCount?: number;
  bookerInforCode?: string[];
  notice?: TranslateText;
}

export interface Affiliated {
  id: number;
  name?: string;
  description?: string;
}

export interface Department {
  id: number;
  affiliated?: Affiliated;
  name?: TranslateText;
  manager?: TranslateText;
  tel?: TranslateText;
  email?: string;
  etc?: TranslateText;
  onlineReservationYn?: boolean;
}

export interface RoomBase {
  id: number;
  roomType?: string;
  roomName?: TranslateText;
  roomCount?: number;
  contractArea?: number;
  dedicatedArea?: number;
  roomImages?: MediaContainer<FileContent>[];
  roomOption: TranslateText;
}

export interface CMSOptionsType {
  id?: number;
  index?: number;
  textType?: string;
  optionGroup?: string;
  name: TranslateText;
  description: TranslateText;
}

export interface DateType {
  alwaysYn?: boolean;
  startDate?: string;      // "2022-01-01"
  endDate?: string;        // "2022-01-01"
  startTime?: string;      // '23:59:00'
  endTime?: string;        // '00:00:00'
}

export interface UserType {
  name: string;
  uid: string;
}
