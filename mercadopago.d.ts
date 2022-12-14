declare module "mercadopago" {
  export function configure(options: ConfigureOptions);
  export const preferences: Preferences;

  export interface ConfigureOptions {
    client_id?: string;
    client_secret?: string;
    access_token: string;
    sandbox?: boolean;
    show_promise_error?: boolean = true;
  }

  export interface PaymentItem {
    title: string;
    description: string;
    quantity: number;
    currency_id: Currencies;
    unit_price: number;
    picture_url?: string;
  }

  enum Currencies {
    ARS = "ARS",
  }

  export interface MercadoPagoResponse {
    response: {
      init_point: string;
      sandbox_init_point: string;
    };
  }

  export interface MercadoPagoPaymentRequest {
    items: PaymentItem[];
    back_urls?: {
      success: string;
      pending: string;
      failure: string;
    };
    auto_return?: string;
    external_reference: string;
    expires: boolean;
  }

  export interface Preferences {
    schema: {
      additionalProperties: false;
      properties: PaymentRequest;
    };
    partnersHeaders: true;
    create: (data: MercadoPagoPaymentRequest) => MercadoPagoResponse;
    save: Function;
    update: Function;
    get: Function;
    findById: Function;
  }
}
