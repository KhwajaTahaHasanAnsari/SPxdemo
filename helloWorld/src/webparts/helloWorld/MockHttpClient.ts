import { ISPList } from './HelloWorldWebPart';

export default class MockHttpClient  {

   private static _items: ISPList[] = [ { Title: 'Mock List', Id: '1' },
                                         { Title: 'Mock list business unit ', Id: '2' },
                                        { Title: 'xyz ', Id:'3'}] ;
                                       

                                       //console.log(ISPList);

   public static get(): Promise<ISPList[]> {
   return new Promise<ISPList[]>((resolve) => {
           resolve(MockHttpClient._items);
       });
   
}
}