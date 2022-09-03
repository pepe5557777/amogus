import { NextApiRequest, NextApiResponse } from "next";
import { configure } from "mercadopago";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const mercadoPago = require("mercadopago");
  configure({
    access_token:
      "",
  });

  let preference = {
    operation_type: "regular_payment",
    notification_url: "http://localhost:3000/api/notif",
    items: [
      {
        title: "carrera 1",
        unit_price: 77777,
        quantity: 2,
      },
    ],
    payer: {
      name: "",
      surname: "",
      email: "info@turnosweb.com",
      date_created: "",
      phone: {
        area_code: "",
        number: 12312233232,
      },
      identification: {
        type: "",
        number: "2332322332",
      },
      address: {
        street_name: "",
        street_number: 3223322332,
        zip_code: "",
      },
    },
    // back_urls: {
    //   success: "http://localhost:3000/",
    //   failure: "http://localhost:8080/",
    //   pending: "http://localhost:8080/",
    // },
    auto_return: "approved",
    // redirect_urls: {
    //   success: redirectURL,
    //   failure: redirectURL,
    //   pending: redirectURL,
    // },
    statement_descriptor: "ATRunning",
  };

  mercadoPago.preferences
    .create(preference)
    .then(function (response) {
      // console.log(response);
      res.json({
        id: response.body.id,
        init_point: response.body.init_point,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
