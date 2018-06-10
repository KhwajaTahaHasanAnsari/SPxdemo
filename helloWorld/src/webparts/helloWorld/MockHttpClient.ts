import { ISPList } from './HelloWorldWebPart';

export default class MockHttpClient  {

   private static _items: ISPList[] = [{ Title: 'Mock List', Id: '1' , value:''},
                                       { Title: 'Mock List 2', Id: '2' ,value:''},  
                                       { Title: 'Mock List 3', Id: '3' , value:'' }];  


   public static get(): Promise<ISPList[]> {
   return new Promise<ISPList[]>((resolve) => {
           resolve(MockHttpClient._items);
       });
   
}