exports.bodyhtml = (title, body, linkText, link) => `
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="x-apple-disable-message-reformatting">
  <title></title>
  <style>
    table, td, div, h1, p {font-family: Arial, sans-serif;}
  </style>
  </head>
  <body style="margin:0;padding:0;">
  <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;background:#ffffff;">
    <tr>
      <td style="padding:0; display: flex; justify-content: center;">
        <table role="presentation" style="width:602px;border-collapse:collapse;border:1px solid #cccccc;border-spacing:0;display: flex; justify-content: flex-start;">
          <tr>
            <td style="padding:40px 0 30px 0;background-image:linear-gradient(90deg, #007006, #000000); display: flex; justify-content: center;">
              <img src="https://assets.codepen.io/210284/h1.png" alt="" width="300" style="height:auto;display:block;" />
            </td>
          </tr>
          <tr>
            <td style="padding:36px 30px 42px 30px;">
              <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;">
                <tr>
                  <td style="padding:0 0 36px 0;color:#000000;">
                    <h1 style="font-size:24px;margin:0 0 20px 0;font-family:Arial,sans-serif;">${title}</h1>
                    <p style="margin:0 0 12px 0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;">${body}</p>
                    <p style="margin:0;font-size:16px;line-height:24px;font-family:Arial,sans-serif;"><a href="${link}" style="color:#007006;text-decoration:underline;">${linkText}</a></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:30px;background-image:linear-gradient(90deg, #007006, #000000);">
              <table role="presentation" style="width:100%;border-collapse:collapse;border:0;border-spacing:0;font-size:9px;font-family:Arial,sans-serif;">
                <tr>
                  <td style="padding:0;width:50%; display: flex; justify-content: flex-end;" >
                    <p style="margin:0;font-size:14px;line-height:16px;font-family:Arial,sans-serif;color:#ffffff;">
                      &reg; Someone, Somewhere 2021<br/>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
`