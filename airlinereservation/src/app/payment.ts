export class Payment {

      cardNumber:number

      cardHolderName:string

      cardExMonth:string

      cardExYear:number

      cvv:number

      constructor(cardNumber:number,cardHolderName : string,cardExMonth: string, cardExYear:number,cvv:number){
        this.cardNumber=cardNumber,
        this.cardHolderName=cardHolderName,
        this.cardExMonth=cardExMonth,
        this.cardExYear=cardExYear,
        this.cvv=cvv

 
     }
}
