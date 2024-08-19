"use client";
import React, { useState, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Helvetica", "Arial", sans-serif;
  margin: 0;
  padding: 32px 16px;
  background: #fff;
  position: relative;
  height: 100vh;
`;

const Title = styled.h2`
  color: #111;
  font-size: 24px;
  font-weight: bold;
  margin: 16px 0;
`;

const Subtitle = styled.h3`
  color: #666;
  font-size: 16px;
  font-weight: normal;
  margin: 0 0 24px 0;
`;

const Button = styled.button`
  display: inline-block;
  vertical-align: middle;
  border: 0;
  padding: 12px 24px;
  color: #fff;
  border: 1px solid #000;
  background: #000;
  font-weight: bold;
  font-size: 16px;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background: #222;
    border: 1px solid #222;
  }

  ${(props) =>
    props.alt &&
    `
    color: #000;
    background: #fff;
    margin-left: 24px;
    border: 1px solid #000;

    &:hover {
      color: #555;
      border: 1px solid #555;
      background: #fff;
    }
  `}
`;

const ButtonIcon = styled.svg`
  display: inline-block;
  vertical-align: middle;
  margin-right: 4px;
`;

const ButtonText = styled.span`
  display: inline-block;
  vertical-align: middle;
`;

const EmailContainer = styled.div`
  max-width: 1100px;
  margin: auto;
`;

const EmailHeader = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 16px;
`;

const Link = styled.a`
  color: #007be5;
`;

const SignatureContainer = styled.div`
  border-radius: 8px;
  margin: 8px 0;
  box-shadow:
    0px 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    0px 12.5px 10px rgba(0, 0, 0, 0.035),
    0px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    0px 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0px 100px 80px rgba(0, 0, 0, 0.07);
`;

const SignatureHeader = styled.div`
  background: #eee;
  color: #111;
  font-size: 14px;
  padding: 12px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "Arial", sans-serif;
`;

const SignatureBody = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const NoPhotoCopySignature = () => {
  const [copyStatus, setCopyStatus] = useState("Copy HTML Signature");
  const [copyStatusRaw, setCopyStatusRaw] = useState(
    "Copy HTML Signature (Raw Code)",
  );
  const signatureRef = useRef(null);

  const htmlString = `<table bgcolor="transparent" border="0" cellpadding="0" cellspacing="0" width="100%" style="background:transparent;border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;"><tr><td align="left" style="padding:0;"><div class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;"><div class="bg " lang="en" dir="auto">
              <!--[if mso | IE]>
              <table align="left" border="0" cellpadding="0" cellspacing="0" class="r-outlook -outlook pr-16-outlook pl-16-outlook -outlook" role="presentation" style="width:600px;" width="600"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
              <![endif]--><div class="r pr-16 pl-16" style="background:#fafafa;background-color:#fafafa;margin:0px;max-width:600px;">
              <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fafafa;background-color:#fafafa;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:16px 0px 16px 0px;text-align:left;">
              <!--[if mso | IE]>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class style="width:600px;">
              <![endif]--><div class="pc100 ogf" style="font-size:0;line-height:0;text-align:left;display:inline-block;width:100%;direction:ltr;">
              <!--[if mso | IE]>
              <table border="0" cellpadding="0" cellspacing="0" role="presentation"><tr><td style="vertical-align:middle;width:600px;">
              <![endif]--><div class="pc100 ogf c" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100.0000%;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td style="border:none;vertical-align:middle;padding:0px 16px 0px 16px;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%"><tbody><tr><td align="left" class="i m" style="font-size:0;padding:0;padding-bottom:4px;word-break:break-word;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;"><tbody><tr><td style="width:64px;">
              </td></tr></tbody></table>
              </td></tr><tr><td align="left" class="x m" style="font-size:0;padding-bottom:4px;word-break:break-word;"><div style="text-align:left;"><p style="Margin:0;text-align:left;mso-line-height-alt:30px;mso-ansi-font-size:20px;"><span style="font-size:20px;font-family:'IBM Plex Sans','Helvetica',sans-serif;font-weight:700;color:#2f48c4;line-height:145%;mso-line-height-alt:30px;mso-ansi-font-size:20px;">First Name Last Name</span></p></div>
              </td></tr><tr><td align="left" class="x m" style="font-size:0;padding-bottom:4px;word-break:break-word;"><div style="text-align:left;"><p style="Margin:0;text-align:left;mso-line-height-alt:16px;mso-ansi-font-size:14px;"><span style="font-size:13px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:115%;mso-line-height-alt:16px;mso-ansi-font-size:14px;">Title/Role</span></p></div>
              </td></tr><tr><td class="s m" style="font-size:0;padding:0;padding-bottom:4px;word-break:break-word;" aria-hidden="true"><div style="height:12px;line-height:12px;">&#8202;</div>
              </td></tr><tr><td align="center" class="d m" style="font-size:0;padding:0;padding-bottom:4px;word-break:break-word;"><p style="border-top:solid 1px #2f48c4;font-size:1px;margin:0px;width:100%;"></p>
              <!--[if mso | IE]>
              <table align="left" border="0" cellpadding="0" cellspacing="0" style="border-top:solid 1px #2f48c4;font-size:1px;margin:0px;width:568px;" role="presentation" width="568px"><tr><td style="height:0;line-height:0;"> &nbsp;
              </td></tr></table>
              <![endif]-->
              </td></tr><tr><td class="s m" style="font-size:0;padding:0;padding-bottom:4px;word-break:break-word;" aria-hidden="true"><div style="height:12px;line-height:12px;">&#8202;</div>
              </td></tr><tr><td align="left" class="i m" style="font-size:0;padding:0;padding-bottom:4px;word-break:break-word;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;"><tbody><tr><td style="width:140px;"> <img alt src="https://e.hypermatic.com/s_a40d54e52ad58232506a8bb57156d8c2.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="140" height="auto">
              </td></tr></tbody></table>
              </td></tr><tr><td class="s m" style="font-size:0;padding:0;padding-bottom:4px;word-break:break-word;" aria-hidden="true"><div style="height:8px;line-height:8px;">&#8202;</div>
              </td></tr><tr><td align="left" class="x m" style="font-size:0;padding-bottom:4px;word-break:break-word;"><div style="text-align:left;"><p style="Margin:0;text-align:left;mso-line-height-alt:18px;mso-ansi-font-size:12px;"><span style="font-size:12px;font-family:'IBM Plex Sans','Helvetica',sans-serif;font-weight:500;color:#2f48c4;line-height:142%;mso-line-height-alt:18px;mso-ansi-font-size:12px;"><a href="tel:+18446737225" style="color:#2f48c4;text-decoration:initial;" target="_blank">844-673-7225</a></span></p></div>
              </td></tr><tr><td class="s m" style="font-size:0;padding:0;padding-bottom:4px;word-break:break-word;" aria-hidden="true"><div style="height:4px;line-height:4px;">&#8202;</div>
              </td></tr><tr><td align="left" class="x m" style="font-size:0;padding-bottom:4px;word-break:break-word;"><div style="text-align:left;"><p style="Margin:0;text-align:left;mso-line-height-alt:16px;mso-ansi-font-size:12px;"><span style="font-size:12px;font-family:'IBM Plex Sans','Helvetica',sans-serif;font-weight:500;color:#2f48c4;line-height:133%;mso-line-height-alt:16px;mso-ansi-font-size:12px;">www.stablekernel.com</span></p></div>
              </td></tr><tr><td class="s m" style="font-size:0;padding:0;padding-bottom:4px;word-break:break-word;" aria-hidden="true"><div style="height:4px;line-height:4px;">&#8202;</div>
              </td></tr><tr><td align="left" class="x m" style="font-size:0;padding-bottom:4px;word-break:break-word;"><div style="text-align:left;"><p style="Margin:0;text-align:left;mso-line-height-alt:16px;mso-ansi-font-size:12px;"><span style="font-size:12px;font-family:'IBM Plex Sans','Helvetica',sans-serif;font-weight:500;color:#2f48c4;line-height:133%;mso-line-height-alt:16px;mso-ansi-font-size:12px;">746 Willoughby Way NE STE 200</span></p><p style="Margin:0;mso-line-height-alt:16px;mso-ansi-font-size:12px;"><span style="font-size:12px;font-family:'IBM Plex Sans','Helvetica',sans-serif;font-weight:500;color:#2f48c4;line-height:133%;mso-line-height-alt:16px;mso-ansi-font-size:12px;">Atlanta, GA 30312</span></p></div>
              </td></tr><tr><td class="s m" style="font-size:0;padding:0;padding-bottom:4px;word-break:break-word;" aria-hidden="true"><div style="height:12px;line-height:12px;">&#8202;</div>
              </td></tr><tr><td align="left" class="i fw-1" style="font-size:0;padding:0;padding-bottom:0;word-break:break-word;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;" class="fwm"><tbody><tr><td style="width:331px;" class="fwm"> <img alt src="https://e.hypermatic.com/s_953040b520f9843830d03971a4c5917f.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="331" height="auto">
              </td></tr></tbody></table>
              </td></tr></tbody></table>
              </td></tr></tbody></table></div>
              <!--[if mso | IE]>
              </td></tr></table>
              <![endif]--></div>
              <!--[if mso | IE]>
              </td></tr></table>
              <![endif]-->
              </td></tr></tbody></table></div>
              <!--[if mso | IE]>
              </td></tr></table>
              <![endif]--></div></div>
              </td></tr></table>`;

  const handleCopy = (raw = false) => {
    const content = signatureRef.current;
    const range = document.createRange();
    range.selectNodeContents(content);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();

    if (raw) {
      setCopyStatusRaw("Copied HTML (Raw Code) to your clipboard!");
      setTimeout(
        () => setCopyStatusRaw("Copy HTML Signature (Raw Code)"),
        5000,
      );
    } else {
      setCopyStatus("Copied HTML to your clipboard!");
      setTimeout(() => setCopyStatus("Copy HTML Signature"), 5000);
    }
  };

  return (
    <Container>
      <EmailContainer>
        <EmailHeader>
          <Title>✉️ Signature Preview</Title>
          <Subtitle>
            Once you've copied the signature scroll down to read the rest of the
            instructions.
          </Subtitle>
          <Button onClick={() => handleCopy(false)}>
            <ButtonIcon
              width="18"
              height="18"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <path d="M20 24H0V2h3C4.229 2 5.18.916 6 0h8c.82.916 1.771 2 3 2h3v9h-2V4h-4l-2 2H8.102L6 4H2v18h16v-5h2v7zm-10-4H4v-1h6v1zm0-2H4v-1h6v1zm6-5h8v2h-8v3l-5-4 5-4v3zm-6 3H4v-1h6v1zm0-2H4v-1h6v1zm0-2H4v-1h6v1zm0-2H4V9h6v1zM9 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
            </ButtonIcon>
            <ButtonText>{copyStatus}</ButtonText>
          </Button>
          <Button alt onClick={() => handleCopy(true)}>
            <ButtonIcon
              width="18"
              height="18"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 12v1.649l3.229 1.351-3.229 1.347v1.653l5-2.201v-1.599l-5-2.2zm-7 2.201v1.599l5 2.2v-1.653l-3.229-1.347 3.229-1.351v-1.649l-5 2.201zm5.362-12.201c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614z" />
            </ButtonIcon>
            <ButtonText>{copyStatusRaw}</ButtonText>
          </Button>
        </EmailHeader>
        <SignatureContainer>
          <SignatureHeader>Email Signature Preview</SignatureHeader>
          <SignatureBody>
            <div
              ref={signatureRef}
              dangerouslySetInnerHTML={{ __html: htmlString }}
            />
          </SignatureBody>
        </SignatureContainer>
      </EmailContainer>
    </Container>
  );
};
export default NoPhotoCopySignature;
