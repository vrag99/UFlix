export const MAIL_SUBJECT = 'Verify your email';
export function MAIL_BODY(otp: string) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Verify your login</title>
      <!--[if mso]><style type="text/css">body, table, td, a { font-family: Arial, Helvetica, sans-serif !important; }</style><![endif]-->
    </head>
    
    <body style="font-family: Helvetica, Arial, sans-serif; margin: 0px; padding: 0px; background-color: #ffffff;">
      <table role="presentation"
        style="width: 100%; border-collapse: collapse; border: 0px; border-spacing: 0px; font-family: Arial, Helvetica, sans-serif; background-color: rgb(239, 239, 239);">
        <tbody>
          <tr>
            <td align="center" style="padding: 1rem 2rem; vertical-align: top; width: 100%;">
              <table role="presentation" style="max-width: 600px; border-collapse: collapse; border: 0px; border-spacing: 0px; text-align: left;">
                <tbody>
                  <tr>
                    <td style="padding: 40px 0px 0px;">
                      <div style="text-align: left;">
                        <div style="padding-bottom: 20px;"><svg width="229" height="130" viewBox="0 0 229 130" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.528 80.552H28.224C26.56 80.552 25.376 80.328 24.672 79.88C24.032 79.432 23.488 78.504 23.04 77.096L18.336 62.216C18.144 61.512 17.824 61.16 17.376 61.16C16.864 61.16 16.608 61.512 16.608 62.216V97.448C16.608 98.856 16.352 99.816 15.84 100.328C15.392 100.776 14.464 101 13.056 101H7.68C6.272 101 5.312 100.776 4.8 100.328C4.352 99.816 4.128 98.856 4.128 97.448V32.552C4.128 31.144 4.352 30.216 4.8 29.768C5.312 29.256 6.272 29 7.68 29H13.824C15.936 29 17.44 29.352 18.336 30.056C19.232 30.696 20 32.008 20.64 33.992L28.224 58.952C28.48 59.72 28.864 60.104 29.376 60.104C29.888 60.104 30.272 59.72 30.528 58.952L38.112 33.992C38.752 32.008 39.52 30.696 40.416 30.056C41.312 29.352 42.816 29 44.928 29H51.072C52.48 29 53.408 29.256 53.856 29.768C54.368 30.216 54.624 31.144 54.624 32.552V97.448C54.624 98.856 54.368 99.816 53.856 100.328C53.408 100.776 52.48 101 51.072 101H45.696C44.288 101 43.328 100.776 42.816 100.328C42.368 99.816 42.144 98.856 42.144 97.448V62.216C42.144 61.512 41.888 61.16 41.376 61.16C40.928 61.16 40.608 61.512 40.416 62.216L35.712 77.096C35.264 78.504 34.688 79.432 33.984 79.88C33.344 80.328 32.192 80.552 30.528 80.552ZM99.474 79.88C99.474 88.072 98.098 93.8 95.346 97.064C92.658 100.328 87.858 101.96 80.946 101.96C74.034 101.96 69.202 100.328 66.45 97.064C63.762 93.8 62.418 88.072 62.418 79.88V50.12C62.418 41.992 63.762 36.296 66.45 33.032C69.202 29.704 74.034 28.04 80.946 28.04C87.858 28.04 92.658 29.704 95.346 33.032C98.098 36.296 99.474 41.992 99.474 50.12V79.88ZM76.05 83.144C76.05 85.064 76.434 86.44 77.202 87.272C77.97 88.104 79.218 88.52 80.946 88.52C82.674 88.52 83.922 88.104 84.69 87.272C85.458 86.44 85.842 85.064 85.842 83.144V47.336C85.842 45.224 85.458 43.72 84.69 42.824C83.922 41.928 82.674 41.48 80.946 41.48C79.218 41.48 77.97 41.928 77.202 42.824C76.434 43.72 76.05 45.224 76.05 47.336V83.144ZM120.236 101C117.484 101 115.596 100.616 114.572 99.848C113.548 99.08 112.78 97.448 112.268 94.952L105.164 61.544C104.396 57.768 104.012 53.672 104.012 49.256V32.552C104.012 31.144 104.236 30.216 104.684 29.768C105.196 29.256 106.156 29 107.564 29H113.708C115.116 29 116.044 29.256 116.492 29.768C117.004 30.216 117.26 31.144 117.26 32.552V53.096C117.26 54.312 117.356 55.656 117.548 57.128L121.58 81.32C121.708 82.28 122.156 82.76 122.924 82.76C123.692 82.76 124.14 82.28 124.268 81.32L128.3 57.128C128.492 55.72 128.588 54.376 128.588 53.096V32.552C128.588 31.144 128.812 30.216 129.26 29.768C129.772 29.256 130.732 29 132.14 29H138.284C139.692 29 140.62 29.256 141.068 29.768C141.58 30.216 141.836 31.144 141.836 32.552V49.256C141.836 53.928 141.452 58.024 140.684 61.544L133.58 94.952C133.068 97.448 132.3 99.08 131.276 99.848C130.252 100.616 128.364 101 125.612 101H120.236ZM208.532 44.168V54.92C208.532 56.072 209.108 56.648 210.26 56.648H222.164C223.572 56.648 224.5 56.904 224.948 57.416C225.46 57.864 225.716 58.792 225.716 60.2V66.536C225.716 67.944 225.46 68.904 224.948 69.416C224.5 69.864 223.636 70.088 222.356 70.088H210.26C209.556 70.088 209.076 70.216 208.82 70.472C208.628 70.728 208.532 71.176 208.532 71.816V85.832C208.532 86.984 209.108 87.56 210.26 87.56H223.316C224.724 87.56 225.652 87.816 226.1 88.328C226.612 88.776 226.868 89.704 226.868 91.112V97.448C226.868 98.856 226.612 99.816 226.1 100.328C225.652 100.776 224.724 101 223.316 101H198.836C197.428 101 196.468 100.776 195.956 100.328C195.508 99.816 195.284 98.856 195.284 97.448V32.552C195.284 31.144 195.508 30.216 195.956 29.768C196.468 29.256 197.428 29 198.836 29H223.316C224.724 29 225.652 29.256 226.1 29.768C226.612 30.216 226.868 31.144 226.868 32.552V38.888C226.868 40.296 226.612 41.256 226.1 41.768C225.652 42.216 224.724 42.44 223.316 42.44H210.26C209.556 42.44 209.076 42.568 208.82 42.824C208.628 43.08 208.532 43.528 208.532 44.168Z" fill="url(#paint0_linear_28_6)"/>
<path d="M150.136 92.6945L163.535 59.2H161.399C159.301 59.2 157.599 57.4989 157.599 55.4V51.6C157.599 49.5011 159.301 47.8 161.399 47.8V44H155.699C153.601 44 151.899 42.2989 151.899 40.2V28.8C151.899 26.7011 153.601 25 155.699 25H178.499C180.598 25 182.299 26.7011 182.299 28.8H186.099C188.198 28.8 189.899 30.5011 189.899 32.6V36.4C189.899 38.4989 188.198 40.2 186.099 40.2H182.299C182.299 42.2989 180.598 44 178.499 44H172.799V47.8C174.898 47.8 176.599 49.5011 176.599 51.6V55.4C176.599 57.4989 174.898 59.2 172.799 59.2H170.664L184.061 92.6945C184.451 93.6685 183.98 94.7744 183.004 95.1645C182.773 95.257 182.533 95.3 182.298 95.3C181.545 95.3 180.833 94.849 180.535 94.1055L168.998 65.2622V99.1C168.998 100.15 168.148 101 167.098 101C166.048 101 165.198 100.15 165.198 99.1V65.2623L153.661 94.1057C153.365 94.8492 152.652 95.3002 151.898 95.3002C151.664 95.3002 151.423 95.2571 151.193 95.1646C150.219 94.7744 149.747 93.6685 150.136 92.6945ZM182.299 36.4H186.099V32.6H182.299V36.4ZM178.499 40.2V28.8H155.699V40.2H178.499ZM165.199 44V47.8H168.999V44H165.199ZM172.799 55.4V51.6H161.399V55.4H172.799Z" fill="url(#paint1_linear_28_6)"/>
<defs>
<linearGradient id="paint0_linear_28_6" x1="166.5" y1="179.5" x2="167" y2="46" gradientUnits="userSpaceOnUse">
<stop stop-color="#080808" stop-opacity="0"/>
<stop offset="1" stop-color="#FD4B20"/>
</linearGradient>
<linearGradient id="paint1_linear_28_6" x1="190" y1="211" x2="169.5" y2="34.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#080808" stop-opacity="0"/>
<stop offset="1" stop-color="#FD4B20"/>
</linearGradient>
</defs>
</svg>
</div>
                      </div>
                      <div style="padding: 20px; background-color: rgb(255, 255, 255);">
                        <div style="color: rgb(0, 0, 0); text-align: left;">
                          <h1 style="margin: 1rem 0">Verification code</h1>
                          <p style="padding-bottom: 16px">Please use the verification code below to sign in.</p>
                          <p style="padding-bottom: 16px"><strong style="font-size: 130%">${otp}</strong></p>
                          <p style="padding-bottom: 16px">If you didn’t request this, you can ignore this email.</p>
                          <p style="padding-bottom: 16px">Thanks,<br>The MOViE Team</p>
                        </div>
                      </div>
                      <div style="padding-top: 20px; color: rgb(153, 153, 153); text-align: center;">
                        <p style="padding-bottom: 16px">Made with ♥ in India</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
    
    </html>`;
}