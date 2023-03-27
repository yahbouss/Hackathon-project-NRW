const nodemailer = require('nodemailer')


const sendMailer= async (data)=>{
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL, // generated ethereal user
      pass: process.env.GMAIL_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  await transporter.sendMail({
    from: 'Yahbouss <yahbouss@smu.tn>', // sender address
    to: "Warehouse@smu.tn",
    subject: `Refill in unit < 2 >`, // Subject line
    text: `
    Unit to refill: < 2 >
    supply needed: < ${data.supply}>
    station id: < ${data.station_id}>
    `
  }).catch(err =>console.log(err))
}

module.exports = sendMailer