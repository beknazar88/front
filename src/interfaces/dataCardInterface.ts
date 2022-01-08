export interface GetInvoiceCountWithSumEsf {
    count: number;
    sum: number;
  } 
  ////ESF
  export interface GetESFRegistrationByMonth {
    count: number;
    date: string
    ;
  } 

  
  export interface RegistrationByMonth {
    dataAll?: GetESFRegistrationByMonth
  } 
  
  export interface GetESFRegistrationByMonthFace extends Array<GetESFRegistrationByMonth>{}

  /// конец ESF

  ///KKM
  export interface GetKKMRegistrationByMonth {
    kkmCount: number,
    kkmDate: string,
  } 

  export interface KKMRegistrationByMonth {
    dataAll?: GetKKMRegistrationByMonth
  } 
  
  export interface GetKKMRegistrationByMonthFace extends Array<GetKKMRegistrationByMonth>{}

  ////конец KKM
  
  export interface TopTenForLastMonthEsf {
  
    invoiceNum: number;
    totalAmount: number;
    invoiceDate: string;
  }
  
  export interface TopTenInfo {
    data?: TopTenForLastMonthEsf
  } 
  
  export interface TopTenForLastMonthEsfInterface extends Array<TopTenForLastMonthEsf>{}

  export interface GetTotalCheckSumKKM {
    count: number;
    sum: number;
  } 
  
  export interface GetRegisterKKM {
    count: number;
  } 
  
  export interface LastChecksInfo {
    checkNumber: string;
    dateCreated: Date;
    totalSum: number;
    kkmName: string;
    kkmSerialNumber: string;
    salesPointFactAddress: string;
    salesPointName: string;
  }
  
  export interface CheckInfo {
    data?: LastChecksInfo
  } 
  
  export interface LastChecksInfoFace extends Array<LastChecksInfo>{}