interface Amount{
    value: string, 
    currency: string
}

interface Recipient{
    account_id: string, 
    gateway_id: string
}

interface PaymentMethod{
    type: string, 
    id: string, 
    saved: boolean
}

interface Comfirmation{
    type: string, 
    return_url: string, 
    comfirmation_url: string
}

export interface IPaymentResponse{
    id: string, 
    status: string, 
    amount: Amount, 
    recipient: Recipient, 
    payment_method: PaymentMethod, 
    created_at: Date, 
    comfirmation: Comfirmation
}